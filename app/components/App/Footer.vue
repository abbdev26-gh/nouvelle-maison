<template>
  <div class="w-full bg-black px-4 md:px-10 py-20">
    <div
      class="w-full flex flex-col items-center gap-4 pb-10 border-b-[1px] border-amber-400/20"
    >
      <img src="/images/logo-white.png" class="h-20 md:h-32" alt="logo" >
      <p class="text-white font-semibold text-sm md:text-base sr-only">NOUVELLE MAISON</p>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 mt-10">
      <div class="grid">
        <AppPretitle class="!justify-start">Address</AppPretitle>
        <p class="text-gray-300 text-sm md:text-base mt-2 ml-6">
          Nouvelle Maison Ltd. <br >
          No. 36 Lagos Avenue, <br >East Legon, Ghana
        </p>
      </div>
      <div class="grid">
        <AppPretitle class="!justify-start">Call Us</AppPretitle>
        <p class="text-gray-300 text-sm md:text-base mt-2 ml-6">
          +233 (0) 302523984 <br >
          +233 (0) 303983219 <br>
          +233 (0) 257728848
        </p>
      </div>
      <div class="grid">
        <AppPretitle class="!justify-start">Email Us</AppPretitle>
        <p class="text-gray-300 text-sm ml-6 md:text-base mt-2">
          <a href="mailto:info@nouvellemaisonlimited.com"
            >info@nouvellemaisonlimited.com
          </a> <br >
          <a href="mailto:sales@nouvellemaisonlimited.com"
            >sales@nouvellemaisonlimited.com</a
          >
        </p>
      </div>
      <div class="grid">
        <AppPretitle class="!justify-start">Explore</AppPretitle>
        <ul class="flex flex-col gap-1 mt-2 ml-6">
          <li>
            <a href="/#" class="text-gray-300 text-sm md:text-base hover:text-amber-400"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="text-gray-300 text-sm md:text-base hover:text-amber-400"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="text-gray-300 text-sm md:text-base hover:text-amber-400"
              >Our Services</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="text-gray-300 text-sm md:text-base hover:text-amber-400"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full text-center text-white text-sm mt-20">
      &copy; 2025 Nouvelle Maison Ltd. All rights reserved.
    </div>
  </div>
</template>
