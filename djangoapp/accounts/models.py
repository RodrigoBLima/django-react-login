from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager ## A new class is imported. ##

# Create your models here.

class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        print(password)
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        print(user)
        print(password)
        return user

    def create_user(self, email, password=None, **extra_fields):
        print(password)
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        # print(user)
        print(password)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)



class User(AbstractUser):
    cep = models.CharField(max_length=9, blank=True,verbose_name="CEP")
    location = models.CharField(max_length=50, verbose_name="Localidade", blank=True)
    email = models.EmailField(('email address'), unique=True,)
    password = models.CharField(max_length=50, blank=False, null=False, verbose_name="Senha")

    def __str__(self):
        return self.email