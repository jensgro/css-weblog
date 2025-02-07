---
title: Custom Properties
date: 2025-02-05
icon: css
---

Sie werden umgangssprachlich "CSS-Variablen" genannt und funktionieren anders, als bei Sass.

{% highlight "css" %}
:root {
    --bg-color: #fff;
}
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #0f0f0f;
    }
}
html {
  color-scheme: light dark;
}
body {
    background-color: var(--bg-color);
}
{% endhighlight %}

## Button-Basis (Ausschnitt)

{% highlight "css" %}
.btn {
    font-size         : var(--_btn-font-size, 20px);
    font-weight       : var(--_btn-font-weight, normal);
    line-height       : var(--_btn-line-height, 20px);
    height            : var(--_btn-height, 48px);
    padding           : var(--_btn-padding, 16px);
    color             : var(--_btn-color, var(--color-text-primary));
    background-color  : var(--_btn-background, #eee);
    border            : var(--_btn-border-width, 1px) var(--_btn-border-stroke, solid) var(--_btn-border-color, #cecece);
    border-radius     : var(--_btn-border-radius, 0px);
}
{% endhighlight %}

## Modifikationen

{% highlight "css" %}
.btn-primary {
    --_btn-background : var(--color-background-primary);
}

.btn-secondary {
    --_btn-background : var(--color-background-secondary);
}

.btn-small {
    --_btn-font-size:14px;
}

.btn-round {
    --_btn-border-radius: 100%;
}
{% endhighlight %}

{% baseline "custom-properties" %}
