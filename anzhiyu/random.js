var posts=["2024/12/13/animal/","2024/12/14/food/","2024/12/15/tour/","2024/12/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };