from django.urls import path
from .views import CustomerSignup, CustomerLogin

urlpatterns = [
    path('signup/', CustomerSignup.as_view(), name='customer-signup'),
    path('login/', CustomerLogin.as_view(), name='customer-login')
]
