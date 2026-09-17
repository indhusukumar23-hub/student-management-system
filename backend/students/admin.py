from django.contrib import admin
from .models import Student

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("student_id", "student_name", "course", "department", "year", "email")
    search_fields = ("student_id", "student_name", "email")
