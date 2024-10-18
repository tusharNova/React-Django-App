from django.shortcuts import render
from .models import Products
from rest_framework import viewsets
from .serializer import ProductSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer


class NewModel():
    def __init__(self) -> None:
        pass
    
    def test(self):
        pass
    