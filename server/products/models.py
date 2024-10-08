from django.db import models

# Create your models here.
class Products(models.Model):
    images = models.ImageField( upload_to='upload/images')
    name = models.CharField( max_length=150 , null=False ,blank=False)
    price = models.DecimalField( max_digits=7, decimal_places=2 , null=False , blank=False)
    description = models.TextField()
    category = models.CharField( max_length=50 , null=False ,blank=False)
    
    
    def __str__(self) -> str:
        return self.name