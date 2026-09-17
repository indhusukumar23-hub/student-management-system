from django.db import models

class Student(models.Model):
    student_id = models.CharField(max_length=20, unique=True)
    student_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=20)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.TextField()
    course = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    admission_date = models.DateField()

    def __str__(self):
        return f"{self.student_id} - {self.student_name}"
