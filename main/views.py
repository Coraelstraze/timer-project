from django.shortcuts import render


def index(request):
    return render(request, 'base.html', {'range': range(1, 4)})
