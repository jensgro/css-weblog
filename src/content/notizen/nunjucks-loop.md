---
title: Einen Teil eines Nunjucks-Loops durchlaufen
date: 2025-02-12
eleventyExcludeFromCollections: true
icon: nunjucks
tags:
    - nunjucks
    - template
    - 11ty
source:
    - url: http://mozilla.github.io/nunjucks/templating.html#for
      title: Nunjucks-Doku

---
Manchmal möchte man nicht alle Ergebnisse einer collection in 11ty zeigen, sondern nur einen Teil. Beispielsweise auf Übersichtsseiten, auf der eventuell nur fünf ausgewählte Einträge gezeigt werden sollen. Das ist ganz einfach möglich:

{% highlight "js" %}

{% raw %}{% for images in index %}{% endraw %}
    {% raw %}{% if (loop.index <= 5) %}{% endraw %}
    <!-- Hier kommt das notwendige HTML hin ... -->
    {% raw %}{% endif %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}

{% endhighlight %}

Innerhalb der Loops haben wir Zugriff auf diese Variablen:

- ``loop.index``: die aktuelle Iteration der Schleife, beginnend bei 1
- ``loop.index0``: die aktuelle Iteration der Schleife, beginnend bei 0
- ``loop.revindex``: Anzahl der Iterationen bis zum Ende der Schleife, beginnend bei 1
- ``loop.revindex0``: Anzahl der Iterationen bis zum Ende der Schleife, beginnend bei 0
- ``loop.first``: Boolean, zeigt die erste Iteration
- ``loop.last``: Boolean, zeigt die letzte Iteration
- ``loop.length``: Die absolute Anzahl der Items

