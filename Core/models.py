from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.validators import EmailValidator, RegexValidator, MaxValueValidator, MinValueValidator
import datetime

# Create your models here.

class UserManager(BaseUserManager):
    def createUser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email Not Found!!!')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def createSuperUser(self, email, password):
        user = self.createUser(email, password)
        user.isAdmin = True
        user.save(using=self._db)
        return user



class User(AbstractBaseUser, PermissionsMixin):
    userID = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100, unique=True, validators=[RegexValidator(regex="^(?=[a-z0-9._]{5,100}$)(?!.*[_.]{2})[^_.].*[^_.]$")])
    email= models.EmailField(max_length=100, unique=True,  validators=[EmailValidator()])
    phoneNo = models.IntegerField(null=True, unique=True)
    name = models.CharField(max_length=100)
    balance = models.IntegerField(default=0)
    secCode = models.IntegerField(null=True, unique=True)

    isSuspended = models.BooleanField(default=False)
    isAdmin = models.BooleanField(default=False)
    emailActivation = models.BooleanField(default=False)
    phoneActivation = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'



class Address(models.Model):  
    addrID = models.AutoField(primary_key=True)
    address = models.CharField(max_length=100, unique=True)
    province = models.CharField(max_length=50, unique=False)
    city = models.CharField(max_length=50, unique=True)
    postalCode = models.IntegerField

    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.province}, {self.city}, {self.address}, {self.postalCode}"



class Category(models.Model):
    catID = models.AutoField(primary_key=True)
    nameOf = models.CharField(max_length=150)
    image = models.ImageField(default='', upload_to='category_images', null=True, blank=True)



class Product(models.Model):
    prodID = models.AutoField(primary_key=True)
    nameOf = models.CharField(max_length=150)
    producer = models.CharField(max_length=150)
    price = models.PositiveIntegerField()
    rating = models.FloatField(default=0, validators=[MaxValueValidator(10), MinValueValidator(0),])
    stock = models.PositiveIntegerField()

    salePercentage = models.PositiveIntegerField(default=0)
    saleStart = models.DateTimeField(blank=True)
    saleEnd = models.DateTimeField(blank=True)

    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)



class ProductImages(models.Model):
    imageID = models.AutoField(primary_key=True)
    image = models.ImageField(default='', upload_to='product_images', null=True, blank=True)
    
    product = models.ForeignKey(Product, null=False, on_delete=models.CASCADE)



class ProductDetails(models.Model):
    title = models.CharField(max_length=150)
    value = models.TextField()

    product = models.ForeignKey(Product, null=False, on_delete=models.CASCADE)



class Review(models.Model):
    reviewID = models.AutoField(primary_key=True)
    textOf = models.TextField()
    dateOf = models.DateField(auto_now_add=True)
    rating = models.IntegerField(default=0, validators=[MaxValueValidator(10), MinValueValidator(0),])
    isPermitted = models.BooleanField(default=False)
    
    product = models.ForeignKey(Product, null=False, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)



class Payment(models.Model):
    trackingCode = models.PositiveIntegerField(default=0)
    amount = models.PositiveIntegerField()
    dateOf = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, null=False, on_delete=models.SET_NULL)



class Cart(models.Model):
    cartID = models.AutoField(primary_key=True)

    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    payment = models.ForeignKey(Payment, null=False, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, null=False, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)



class Post(models.Model):
    postID = models.AutoField(primary_key=True)
    title = models.CharField(max_length=512)
    textOf = models.TextField()
    dateOf = models.DateField(auto_now_add=True)



class PostImages(models.Model):
    imageID = models.AutoField(primary_key=True)
    image = models.ImageField(default='', upload_to='product_images', null=True, blank=True)

    post = models.ForeignKey(Post, null=False, on_delete=models.CASCADE)