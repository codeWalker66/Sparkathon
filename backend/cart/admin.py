# smartcart/admin.py

from django.contrib import admin
from .models import Product, Customer, CartItem, Order, SmartCart

# Register your models here
admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(SmartCart)
