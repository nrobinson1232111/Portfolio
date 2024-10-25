import os
from flask import Flask
from model import db, Certifications, Skills, Education, Positions, Projects
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ['POSTGRES_LINK']

db.init_app(app)

@app.route("/api/python/skills", methods=["GET"])
def get_skills():
    skills = []
    skills_query = db.session.execute(db.select(Skills)).scalars()
    for skill in skills_query:
        skills.append(skill.skill)
    return skills

@app.route("/api/python/education", methods=["GET"])
def get_eduction():
    educations = dict()
    education_query = db.session.execute(db.select(Education)).scalars()
    for education in education_query:
        educations[education.school_name] = {
            "short_name": education.short_name,
            "begin_month": education.begin_month.strftime("%b %Y"),
            "end_month": education.end_month.strftime("%b %Y"),
            "degree_type": education.degree_type,
            "short_degree_type": education.short_degree_type,
            "degree_subject": education.degree_subject
        }
    return educations

@app.route("/api/python/certifications", methods=["GET"])
def get_certifications():
    certifications = []
    certifications_query = db.session.execute(db.select(Certifications)).scalars()
    for certification in certifications_query:
        expiration_date_string = None if certification.expiration_date is None else certification.expiration_date.strftime("%b %Y")
        certifications.append({"name": certification.organization, "organization": certification.organization, "expiration_date": expiration_date_string, "link": certification.link})
    return certifications

@app.route("/api/python/positions", methods=["GET"])
def get_positions():
    positions = []
    positions_query = db.session.execute(db.select(Positions)).scalars()
    for position in positions_query:
        begining_month_string = None if position.begin_month is None else position.begin_month.strftime("%b %Y")
        ending_month_string = None if position.end_month is None else position.end_month.strftime("%b %Y")
        positions.append({"position": position.position, "company": position.company, "begin_month": begining_month_string, "end_month": ending_month_string, "description": [description.description for description in position.descriptions]})
    return positions

@app.route("/api/python/projects", methods=["GET"])
def get_projects():
    projects = []
    projects_query = db.session.execute(db.select(Projects)).scalars()
    for project in projects_query:
        projects.append({"name": project.name, "description": project.description, "tools_used": [tool.tool for tool in project.tools], "github_link": project.github_link, "live_link": project.live_link})
    return projects
