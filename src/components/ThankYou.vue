<template>
  <div class="thank-you">
    <div class="content-parent">
      <img class="content-icon" alt="" src="/content.svg" />
      <b class="thank-you-for">Thank you for booking with us!</b>
      <b class="one-of-our-container">
        <p class="one-of-our">
          One of our team members will be in touch shortly to review your
          request, confirm your appointment with your mentor, and clarify the
          payment method.
        </p>
        <p class="one-of-our">&nbsp;</p>
        <p class="one-of-our">
          In the meantime, you can follow us on our social media channels for
          updates and announcements. We're on Facebook, LinkedIn, and WhatsApp.
        </p>
        <p class="one-of-our">&nbsp;</p>
        <p class="we-look-forward">We look forward to working with you!</p>
        <p class="linkedin-fakebook">LinkedIn , fakebook , WhatsApp</p>
        <p class="one-of-our">&nbsp;</p>
      </b>
    </div>
    <img class="social-links-icon" alt="" src="/social-links.svg" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "ThankYou",
    props: {
      onClose: { type: Function },
    },
  });
</script>
<style scoped>
  .content-icon {
    position: relative;
    width: 207px;
    height: 203px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .thank-you-for {
    position: relative;
  }
  .one-of-our {
    margin: 0;
  }
  .we-look-forward {
    margin: 0;
    color: var(--color-mediumslateblue);
  }
  .linkedin-fakebook {
    margin: 0;
    color: var(--color-red);
  }
  .one-of-our-container {
    position: relative;
    font-size: var(--font-size-5xl);
    display: inline-block;
    text-align: center;
    width: 897px;
    height: 299px;
    flex-shrink: 0;
  }
  .content-parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .social-links-icon {
    position: relative;
    width: 246.71px;
    height: 65.97px;
  }
  .thank-you {
    position: relative;
    border-radius: 24px;
    width: 1041px;
    height: 754px;
    display: flex;
    flex-direction: column;
    padding: 0px 60px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    background-image: url("/public/thank-you@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-darkslategray);
    font-family: var(--font-space-grotesk);
  }
</style>
