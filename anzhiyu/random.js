var posts=["2024/12/13/animal/","2024/12/13/hello-world/","2024/12/14/food/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };