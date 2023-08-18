<template>
  <div class="profile-pic-flag-parent">
    <div class="profile-pic-flag">
      <img class="profile-picture-icon" alt="" src="/profile-picture@2x.png" />
      <div class="flags">
        <img
          class="united-states-of-america-icon"
          alt=""
          src="/united-states-of-america@2x.png"
        />
      </div>
    </div>
    <div class="mentors-name-here-wrapper">
      <b class="mentors-name-here">Mentor’s Name here.</b>
    </div>
    <div class="signup-sign-in-parent">
      <div class="signup-sign-in">
        <img class="stylelinear-icon" alt="" src="/stylelinear.svg" />
        <b class="mentors-name-here">Discovery session Service</b>
        <b class="b">50$</b>
        <img class="vector-icon" alt="" src="/vector1.svg" />
      </div>
      <div class="signup-sign-in1">
        <img class="stylelinear-icon" alt="" src="/stylelinear1.svg" />
        <b class="mentors-name-here">Finds Programs Service</b>
        <b class="b1">50$</b>
        <img class="vector-icon" alt="" src="/vector2.svg" />
      </div>
      <div class="signup-sign-in1">
        <img class="stylelinear-icon" alt="" src="/stylelinear2.svg" />
        <b class="mentors-name-here">Apply for programs Service</b>
        <b class="b1">50$</b>
        <img class="vector-icon" alt="" src="/vector3.svg" />
      </div>
    </div>
    <img class="frame-child" alt="" src="/vector-16.svg" />
    <div class="signup-sign-in3" @click="onSignupSignIn3Click">
      <b class="mentors-name-here">Confirm Services</b>
      <img class="vector-icon" alt="" src="/vector4.svg" />
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Frame",
    props: {
      onClose: { type: Function },
    },
    methods: {
      onSignupSignIn3Click() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .profile-picture-icon {
    position: relative;
    border-radius: 59.69px 59.69px 59.69px 0px;
    width: 217.17px;
    height: 217.06px;
    object-fit: cover;
    z-index: 0;
  }
  .united-states-of-america-icon {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 8.68px 8.68px 8.68px 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .flags {
    position: absolute;
    margin: 0 !important;
    top: 177.99px;
    left: 0px;
    width: 58.61px;
    height: 39.07px;
    z-index: 1;
  }
  .profile-pic-flag {
    height: 217.17px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: 10.85px;
  }
  .mentors-name-here {
    position: relative;
  }
  .mentors-name-here-wrapper {
    height: 39.07px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
  .stylelinear-icon {
    position: relative;
    width: 25.25px;
    height: 25.25px;
  }
  .b {
    position: relative;
    color: var(--white);
  }
  .vector-icon {
    position: relative;
    width: 8.14px;
    height: 13.02px;
    display: none;
  }
  .signup-sign-in {
    border-radius: 42.33px;
    background-color: var(--color-yellowgreen);
    border: 1.6px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 314.76px;
    height: 45.4px;
    display: flex;
    flex-direction: row;
    padding: 16.834861755371094px;
    align-items: center;
    justify-content: flex-start;
    gap: 5.05px;
  }
  .b1 {
    position: relative;
    color: var(--color-red);
  }
  .signup-sign-in1 {
    border-radius: 42.33px;
    background-color: var(--color-linen);
    border: 1.6px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 314.76px;
    height: 45.4px;
    display: flex;
    flex-direction: row;
    padding: 16.834861755371094px;
    align-items: center;
    justify-content: flex-start;
    gap: 5.05px;
  }
  .signup-sign-in-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8.42px;
    font-size: 14.65px;
  }
  .frame-child {
    position: relative;
    width: 176.77px;
    height: 1.68px;
  }
  .signup-sign-in3 {
    border-radius: 42.33px;
    background-color: var(--white);
    box-shadow: 3.3669724464416504px 3.3669724464416504px 0px #2e2e2e;
    border: 1.6px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 314.76px;
    height: 45.4px;
    display: flex;
    flex-direction: row;
    padding: 16.834861755371094px;
    align-items: center;
    justify-content: center;
    gap: 5.05px;
    cursor: pointer;
    font-size: var(--font-size-base);
  }
  .profile-pic-flag-parent {
    position: relative;
    border-radius: 43.77px;
    background-color: var(--color-yellowgreen);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 555.9px;
    display: flex;
    flex-direction: column;
    padding: 26.935779571533203px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    font-size: 30.39px;
    color: var(--color-darkslategray);
    font-family: var(--font-space-grotesk);
  }
</style>
