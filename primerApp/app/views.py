from django.shortcuts import render
from .models import Persona
from django.shortcuts import render_to_response, get_object_or_404


# Create your views here.
def persona_list(request):
    filter = PersonaFilter(request.GET, queryset=Persona.objects.all())
    return render_to_response('index.html', {'filter': filter})
