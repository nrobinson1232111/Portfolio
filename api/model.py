from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from datetime import date
from typing import List

class DC(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=DC)

class Certifications(db.Model):
    name: Mapped[str] = mapped_column(primary_key=True)
    organization: Mapped[str] = mapped_column(primary_key=True)
    expiration_date: Mapped[date] = mapped_column(nullable=True)
    link: Mapped[str] = mapped_column(nullable=False)

class Skills(db.Model):
    skill: Mapped[str] = mapped_column(primary_key=True)

class Education(db.Model):
    school_name: Mapped[str] = mapped_column(primary_key=True)
    short_name: Mapped[str] = mapped_column()
    begin_month: Mapped[date] = mapped_column()
    end_month: Mapped[date] = mapped_column()
    degree_type: Mapped[str] = mapped_column(primary_key=True)
    short_degree_type: Mapped[str] = mapped_column()
    degree_subject: Mapped[str] = mapped_column(primary_key=True)

class Positions(db.Model):
    __tablename__ = "positions"
    position_id: Mapped[int] = mapped_column(primary_key=True, nullable=False)
    position: Mapped[str] = mapped_column()
    company: Mapped[str] = mapped_column()
    begin_month: Mapped[date] = mapped_column()
    end_month: Mapped[date] = mapped_column()
    descriptions: Mapped[List["PositionDescription"]] = relationship(back_populates="position")

class PositionDescription(db.Model):
    __tablename__ = "position_descriptions"
    position_id: Mapped[int] = mapped_column(ForeignKey("positions.position_id"))
    description: Mapped[str] = mapped_column(primary_key=True, nullable=False)
    position: Mapped[Positions] = relationship(back_populates="descriptions")

class Projects(db.Model):
    __tablename__ = "projects"
    project_id: Mapped[int] = mapped_column(primary_key=True, nullable=False)
    name: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column(primary_key=True, nullable=False)
    github_link: Mapped[str] = mapped_column()
    live_link: Mapped[str] = mapped_column()
    tools: Mapped[List["ProjectTools"]] = relationship(back_populates="project")

class ProjectTools(db.Model):
    __tablename__ = "project_tools"
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.project_id"))
    tool: Mapped[str] = mapped_column(primary_key=True, nullable=False)
    project: Mapped[Projects] = relationship(back_populates="tools")
