<template>
  <footer>
    <div id="self_intro">
      <div id="self_intro_content">
        <h2>Menu</h2>
        <ul>
          <li @click="$router.push('/about')">About us</li>
          <li @click="$router.push('/service')">Service</li>
          <li @click="$router.push('/facilities')">Facilites</li>
          <li @click="$router.push('/post')">Post</li>
          <li @click="$router.push('/booking')">Booking</li>
          <li @click="$router.push('/login')">Login</li>
          <li @click="$router.push('/register')">Register</li>
        </ul>
      </div>
      <div id="self_intro_reference">
        <h2>Support</h2>
        <ul>
          <li>FAQ</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Hotline: 0982-912-123</li>
        </ul>
      </div>
      <div id="self_intro_reference">
        <h2>Follow us</h2>
        <ul>
          <li><a href="https://github.com/tien-rayujin/SWP391_FPT_miniproject" target="_blank"><i class="fa-brands fa-square-github" style="font-family: 'Font Awesome 5 Free'"></i>Github</a></li>
          <li><a href="https://www.youtube.com/watch?v=8FsN1yXuUq0" target="_blank"><i style="font-family: 'Font Awesome 5 Free'" class="fa-brands fa-youtube"></i>Youtube</a></li>
        </ul>
      </div>
      <div id="self_intro_map">
        <h2>Visit us at</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387404.2165347202!2d-74.25986741951134!3d40.69714937396483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b31a3676cebf%3A0xa44c0f2046b31ac9!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621436760089!5m2!1sen!2sus" width="600" height="200px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

footer {
  background-color: #B8957B;
  width: 100%;
  margin: 40px auto 0 auto;
  padding: 40px;
}

h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 10px;
  background-color: rgba(255, 254, 253, 0.8);
  color: #B8957B;
  border-radius: 40px;
  width: fit-content;
  padding: 3px 20px;
}

ul li {
  list-style: outside;
  margin-left: 20px;
  font-size: 1.25rem;
  cursor: pointer;
}

ul li:hover {
  margin-left: 40px;
  color: #7282B1;
}

li i{
  display: inline;
  margin-right: 10px;
}

li a {
  color: black;
  font-size: 1.25rem;
  cursor: pointer;
}

#self_intro {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: left;
}
</style>
