---
title: Mehrere Codeblöcke in 11ty
date: 2024-10-10
icon: 11ty
tags:
    - 11ty
    - nunjucks
source:
    -  url: https://github.com/11ty/eleventy/issues/2611
       title: 11ty Github Issue
---

Es kann in 11ty sehr sinnvoll sein, keine Markdown-Dateien, sondern Nunjucks-Dateien zu erstellen und dann spezielle Nunjucks-Features zu nutzen.

Wenn man in einer Nunjucks-Seite anstelle des Links zum Template im Frontmatter das Template "extended", dann kann man auf erweiterte Features zugreifen, die sonst nicht möglich sind.

```jsx
{% raw %}{% extends 'template.njk' %}{% endraw %}

```

So kann man zwei oder mehr Contentblöcke in einer Seite nutzen:

```jsx
{% raw %}---
title: "My page"
parameter1: lorem
parameter2: ipsum
parameter3: 3333
---
{% extends 'template.njk' %}

{% block content %}
   <h1>Title content 1</h1>
   <p>Lorem ipsum</p>
{% endblock %}

{% block content2 %}
    <h2>Title content 2</h2>
    <p>Lorem ipsum</p>
{% endblock %}
{% endraw %}
```
