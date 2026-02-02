<template>
  <div class="w-full bg-black py-10 md:py-32">
    <div class="max-w-screen-2xl mx-auto">
      <div class="text-center mb-12">
        <AppPretitle>Contact Us</AppPretitle>
        <AppSecondaryHeader>Get In Touch</AppSecondaryHeader>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Info & Form -->
        <div class="space-y-8">
          <!-- Contact Information -->
          <div class="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-amber-400">
            <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div class="space-y-6">
              <!-- Location -->
              <div class="flex items-start gap-4">
                <div class="bg-amber-400/20 p-3">
                  <PhMapPin class="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 class="text-gray-400 text-sm mb-1">Location</h4>
                  <p class="text-white">Nouvelle Maison Ltd. <br >
          No. 36 Lagos Avenue, <br >East Legon, Ghana</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="bg-amber-400/20 p-3 ">
                  <PhPhone class="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 class="text-gray-400 text-sm mb-1">Phone</h4>
                  <p class="text-white">+233 (0) 302523984</p>
                  <p class="text-white">+233 (0) 303983219</p>
                  <p class="text-white">+233 (0) 257728848</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="bg-amber-400/20 p-3 ">
                  <PhEnvelope class="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 class="text-gray-400 text-sm mb-1">Email</h4>
                  <p class="text-white"><a href="mailto:info@nouvellemaisonlimited.com"
            >info@nouvellemaisonlimited.com
          </a></p>
                  <p class="text-white"> <a href="mailto:sales@nouvellemaisonlimited.com"
            >sales@nouvellemaisonlimited.com</a
          ></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white/5 hidden backdrop-blur-sm p-8 ">
            <h3 class="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Name -->
              <div>
                <label for="name" class="block text-gray-300 text-sm mb-2">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-gray-300 text-sm mb-2">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-gray-300 text-sm mb-2">Phone Number</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="+233 (0) 123 456 789"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <AppButton type="submit" class="w-full">
                <PhPaperPlaneTilt class="w-5 h-5 mr-2" />
                <span>Send Message</span>
              </AppButton>
            </form>
          </div>
        </div>

        <!-- Google Map -->
        <div class="bg-white/5 backdrop-blur-sm overflow-hidden border-l-4 border-amber-400 h-[800px] lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.5933015912024!2d-0.17356384295664648!3d5.634885157066893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b42a6b34419%3A0x7aa2cc4f20e6bc3d!2sLagos%20Ave%2C%20Accra!5e0!3m2!1sen!2sgh!4v1765201297944!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhMapPin, PhPhone, PhEnvelope, PhPaperPlaneTilt } from '@phosphor-icons/vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>
