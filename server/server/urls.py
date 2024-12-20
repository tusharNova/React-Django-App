
from django.contrib import admin
from django.urls import path , include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from products.views import ProductView


route = routers.DefaultRouter()
route.register("" , ProductView , basename='productView')


urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('api/' , include(route.urls)),
    
] + static(settings.MEDIA_URL ,document_root = settings.MEDIA_ROOT)
