import django_filters
from .models import Persona

class PersonaFilter(django_filters.FilterSet):
    class Meta:
        model = Persona
        fields = ['id', 'nombre']
