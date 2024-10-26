---
title: Strings in Nunjucks zusammenfassen
tags:
    - nunjucks
    - template
    - 11ty
sources:
    - https://github.com/11ty/eleventy/issues/297
    - https://michaelheap.com/nunjucks-concatenate-string/
---

Michael Heap [beschreibt](https://michaelheap.com/nunjucks-concatenate-string/), wie er in Nunjucks Strings zusammenfasst. Er setzt dafür eine Variable und fasst deren Bestandteile mit ``join`` zusammen:

````jsx
{% set url = ["/bits/", data.slug] | join %}
````


{% highlight "js" %}
{% raw %}

{% set url = ["/bits/", data.slug] | join %}

{% endraw %}
{% endhighlight %}



I think you want to use set to set a variable.

Two ways:

{% highlight "js" %}
{% raw %}

{% set canonical = config.baseUrl + page.url %}

{% endraw %}
{% endhighlight %}

or

{% highlight "js" %}
{% raw %}

{% set canonical %}
{{ config.baseUrl }}{{ page.url }}
{% endset %}

{% endraw %}
{% endhighlight %}

The latter is useful if you want to capture a bunch of things, potentially with a lot of content.

---------

I recently needed to dynamically create a URL using `nunjucks`.

My first attempt was to use string interpolation:

{% highlight "js" %}
{% raw %}

{% set url = "/bits/{{ data.slug }}" %}

{% endraw %}
{% endhighlight %}

This didn't work.

It turns out that to build a string from multiple parts, you should use an array and the `join` filter:

{% highlight "js" %}
{% raw %}

{% set url = ["/bits/", data.slug] | join %}

{% endraw %}
{% endhighlight %}

This worked as intended

