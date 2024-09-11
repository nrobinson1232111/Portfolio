from flask import Flask
from flask import request

if __name__ == "__main__":

    app = Flask(__name__)
    
    @app.route("/api/python/skills", methods=["GET"])
    def get_skills():
        return ['Python', 'Javascript', 'Typescript', 'CSS', 'HTML', 'Jira', 'Flask', 'Next.js', 'React.js', 'Java']
    
    @app.route("/api/python/education", methods=["GET"])
    def get_eduction():
        return {
            "Stevenson University": {
                "short_name": "Stevenson",
                "begin_month": "Aug 2012",
                "end_month": "May 2016",
                "degree_type": "Bachelor's",
                "short_degree_type": "BS",
                "degree_subject": "Chemistry"
            },
            "The Community College of Baltimore County": {
                "short_name": "CCBC",
                "begin_month": "Jul 2018",
                "end_month": "Dec 2019",
                "degree_type": "Associate's",
                "short_degree_type": "AS",
                "degree_subject": "Computer Science"
            }
        }
    
    @app.route("/api/python/certifications", methods=["GET"])
    def get_certifications():
        return [
            {"name": "Oracle Certified Associate, Java SE 8 Programmer", "organization": "Oracle", "expiration_date": None, "link": "https://www.credly.com/badges/c1b2aa14-695d-4efb-b667-bdb59ca38318/linked_in_profile"},
            {"name": "Node.js Application Developer (JSNAD)", "organization": "OpenJS Foundation", "expiration_date": "Feb 2025", "link": "https://training.linuxfoundation.org/certification/verify/"},
            {"name": "Linux Essentials", "organization": "Linux Professional Institute", "expiration_date": None, "link": "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000416157/9s6qhmc3kq"}
        ]
    
    @app.route("/api/python/positions", methods=["GET"])
    def get_positions():
        return [
            {
                "position": "Software Developer/Risk Reporting Senior Analyst",
                "company": "Citigroup",
                "begin_month": "Mar 2022",
                "end_month": "May 2024",
                "description": [
                    "Developed Enterprise level Python Flask infrastructure for department from the ground up as part of a small team",
                    "Built/tested Python/Javascript/SQL based automation solutions for clients across department to facilitate reporting processes",
                    "Built browser-based applications on Linux environment using Python Flask, SQL (OracleDB), and Javascript/JQuery",
                    "Built Python/JavaScript based extension to Tableau dashboards",
                    "Wrote JIRA tickets and other documentation for code development and Tableau dashboards",
                    "Trained many business users to use and develop code on Python infrastructure",
                    "Lead the development of multiple Tableau dashboards for clients for reporting and data analysis", 
                    "Consulted on clients’ Tableau Dashboards and Tableau Prep flows upon request",
                    "Coordinated department business-user testing/signoff for the upgrade of a Tableau server to a newer version",
                    "Temporarily helped to deliver monthly/bimonthly risk reports",
                    "Delivered code in an Agile environment with SDLC practices",
                    "Developing/using REST APIs for applications"
                ]
            },
            {
                "position": "Financial Technology Consultant",
                "company": "Capgemini",
                "begin_month": "Feb 2020",
                "end_month": "Mar 2022",
                "description": [
                    "Worked on several aspects of Risk Reporting and was responsible for helping to deliver reports for high level management",
                    "Provided technical expertise to client with technologies including Tableau, Python, VBA, and Excel",
                    "Worked directly and independently with client as an essential member of client risk reporting team",
                    "Automated many aspects of financial reports using technologies including Python, Excel, VBA, and Tableau",
                    "Handled inventory of reports for group and maintained related Python scripts",
                    "Worked directly in client team to help design and improve upon financial report design",
                    "Built many dashboards related to risk reporting to client specifications using Tableau",
                    "Worked with team to deliver monthly Risk Reports",
                    "Handled SharePoint site administration for group",
                    "Assisted with Tableau licensing of client members",
                    "Owned process for reporting on concentration metrics for credit risk",
                    "Provided Tableau dashboard support for hiring process",
                    "Designed/built full stack web applications",
                    "Trained in SDET and as a full stack developer in MERN and MEAN stacks"

                ]
            }
        ]
    
    @app.route("/api/python/projects", methods=["GET"])
    def get_projects():
        return [
            {
                "name": "Morse Code Converter",
                "description": "Command line interface application to convert a set of text to morse code.",
                "tools_used": [
                    "Python"
                ],
                "github_link": "https://github.com/nrobinson1232111/morse-code-converter",
                "live_link": None
            },
            {
                "name": "Portfolio Page",
                "description": "Live web page with CV information for Nathan and links to other projects, contact info, and other useful information.",
                "tools_used": [
                    "Python", "Flask", "JavaScript", "HTML", "CSS", "Tailwind", "React.js", "Next.js", "TypeScript", "Postgres", "AWS-EC2", "AWS-RDS"
                ],
                "github_link": "https://github.com/nrobinson1232111/Portfolio",
                "live_link": request.origin
            }
        ]
    
    
    app.run()
