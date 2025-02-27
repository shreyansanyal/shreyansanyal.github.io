---
layout: page
title: Blog
permalink: /blog/
---

<h1>Shreyan's Blog</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post">
      {% if post.cover %}
      <div class="cover-container">
          <img src="{{ post.cover }}" alt="Cover image" class="cover">
      </div>
      {% endif %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    </li>
  {% endfor %}
</ul>