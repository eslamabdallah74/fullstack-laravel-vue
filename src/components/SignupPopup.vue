<template>
  <div class="signup-popup">
    <div class="create-account-screen">
      <img
        class="image-placeholder-icon"
        alt=""
        src="/image-placeholder@2x.png"
      />
      <div class="head-subhead-typeform">
        <div class="head-subhead">
          <div class="headline">Signup.</div>
          <div class="subhead">Lorem impusm Lorem impusm Lorem impusm.</div>
          <div class="tag-parent2">
            <div class="tag20">
              <img
                class="done-fill0-wght400-grad0-opsz4-icon"
                alt=""
                src="/done-fill0-wght400-grad0-opsz48-1.svg"
              />
              <b class="signing-up-as">Signing up as a mentor.</b>
            </div>
            <div class="tag22">
              <b class="signing-up-as">Signing up as a Student.</b>
            </div>
          </div>
        </div>
        <div class="typeforms-ctas1">
          <div class="typeforms1">
            <div class="type-form15">
              <div class="icon14">
                <img class="user-icon2" alt="" src="/user2.svg" />
                <div class="divider14" />
              </div>
              <div class="username16">Username</div>
            </div>
            <div class="type-form15">
              <div class="icon14">
                <img class="user-icon2" alt="" src="/envelopesimple1.svg" />
                <div class="divider14" />
              </div>
              <div class="username16">Email</div>
            </div>
            <div class="type-form15">
              <div class="icon14">
                <img class="user-icon2" alt="" src="/lockkey1.svg" />
                <div class="divider14" />
              </div>
              <div class="username16">Password</div>
            </div>
            <div class="type-form15">
              <div class="icon14">
                <img class="user-icon2" alt="" src="/lockkey11.svg" />
                <div class="divider14" />
              </div>
              <div class="username16">Confirm password</div>
            </div>
          </div>
        </div>
        <div class="signup-sign-in-group">
          <div class="signup-sign-in14">
            <b class="signing-up-as">Sign up</b>
            <img class="vector-icon21" alt="" src="/vector18.svg" />
          </div>
          <b class="already-have-an-container">
            <span>Already have an account ? </span>
            <span class="login">Login</span>
          </b>
        </div>
        <div class="signup-sign-in-container" @click="onFrameContainer2Click">
          <div class="signup-sign-in15">
            <img
              class="logo-google-g-icon-1"
              alt=""
              src="/7123025-logo-google-g-icon-1@2x.png"
            />
            <b class="signing-up-as">Sign up with Google</b>
          </div>
          <div class="signup-sign-in16">
            <img class="ic-linkedin-icon" alt="" src="/ic-linkedin.svg" />
            <b class="signing-up-as">Sign up with linkedin</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "SignupPopup",
    props: {
      onClose: { type: Function },
    },
    methods: {
      onFrameContainer2Click() {
        this.$router.push("/home-screen-logged-on");
      },
    },
  });
</script>
<style scoped>
  .image-placeholder-icon {
    position: relative;
    border-radius: var(--br-xl-8);
    width: 390px;
    height: 517.4px;
    object-fit: cover;
  }
  .headline {
    align-self: stretch;
    flex: 1;
    position: relative;
    line-height: 120%;
    text-transform: capitalize;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .subhead {
    align-self: stretch;
    position: relative;
    font-size: 20.8px;
    line-height: 160%;
  }
  .done-fill0-wght400-grad0-opsz4-icon {
    position: relative;
    width: 13.87px;
    height: 13.87px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .signing-up-as {
    position: relative;
  }
  .tag20 {
    border-radius: 40.73px;
    background-color: var(--color-mediumslateblue);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 6.933333396911621px 13.866666793823242px;
    align-items: center;
    justify-content: center;
    gap: 4.33px;
  }
  .tag22 {
    border-radius: 40.73px;
    background-color: var(--color-linen);
    box-shadow: 2.1666667461395264px 2.5999999046325684px 0px #2e2e2e;
    border: 1.3px solid var(--color-darkslategray);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 6.933333396911621px 13.866666793823242px;
    align-items: center;
    justify-content: center;
    color: var(--color-darkslategray);
  }
  .tag-parent2 {
    flex: 1;
    width: 412.53px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 17.33px;
    font-size: 13.87px;
    color: var(--color-linen);
  }
  .head-subhead {
    width: 402.13px;
    height: 175.07px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 17.33px;
  }
  .user-icon2 {
    position: relative;
    width: 17.33px;
    height: 17.33px;
  }
  .divider14 {
    position: relative;
    background-color: var(--color-orange);
    width: 0.87px;
    height: 17.33px;
  }
  .icon14 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6.93px;
  }
  .username16 {
    align-self: stretch;
    flex: 1;
    position: relative;
    line-height: 140%;
    display: flex;
    align-items: center;
  }
  .type-form15 {
    border-radius: 8.67px;
    background-color: var(--white);
    border: 0.9px solid var(--light-blue-4);
    box-sizing: border-box;
    width: 412.53px;
    height: 52px;
    display: flex;
    flex-direction: row;
    padding: 6.933333396911621px 17.33333396911621px;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-2xs-4);
  }
  .typeforms1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8.67px;
  }
  .typeforms-ctas1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 13.87px;
  }
  .vector-icon21 {
    position: relative;
    width: 6.5px;
    height: 10.4px;
  }
  .signup-sign-in14 {
    border-radius: var(--br-14xl-8);
    background-color: var(--color-mediumslateblue);
    box-shadow: 2.1666667461395264px 2.5999999046325684px 0px #2e2e2e;
    border: 1.3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 157.3px;
    height: 43.3px;
    display: flex;
    flex-direction: row;
    padding: 6.933333396911621px 10.399999618530273px;
    align-items: center;
    justify-content: center;
    gap: 8.67px;
  }
  .login {
    text-decoration: underline;
    color: var(--color-red);
  }
  .already-have-an-container {
    position: relative;
    font-size: 11.7px;
    color: var(--color-darkslategray);
  }
  .signup-sign-in-group {
    width: 297.27px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 34.67px;
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--color-linen);
  }
  .logo-google-g-icon-1 {
    position: relative;
    width: 16.47px;
    height: 17.33px;
    object-fit: cover;
  }
  .signup-sign-in15 {
    border-radius: var(--br-14xl-8);
    background-color: var(--white);
    box-shadow: 2.1666667461395264px 2.5999999046325684px 0px #2e2e2e;
    border: 1.3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 199.3px;
    height: 43.3px;
    display: flex;
    flex-direction: row;
    padding: 6.933333396911621px 10.399999618530273px;
    align-items: center;
    justify-content: center;
    gap: 0.87px;
  }
  .ic-linkedin-icon {
    position: relative;
    width: 10.29px;
    height: 10.29px;
  }
  .signup-sign-in16 {
    border-radius: var(--br-14xl-8);
    background-color: var(--white);
    box-shadow: 2.1666667461395264px 2.5999999046325684px 0px #2e2e2e;
    border: 1.3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 198.3px;
    height: 43.3px;
    display: flex;
    flex-direction: row;
    padding: 6.933333396911621px 10.399999618530273px;
    align-items: center;
    justify-content: center;
    gap: 4.33px;
  }
  .signup-sign-in-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl-8);
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size-sm);
  }
  .head-subhead-typeform {
    width: 412.53px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl-8);
  }
  .create-account-screen {
    border-radius: var(--br-xl-8);
    width: 958.53px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 52px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: 52px;
    background-image: url("/public/create-account-screen@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .signup-popup {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    text-align: left;
    font-size: 36.4px;
    color: var(--color-darkslategray);
    font-family: var(--font-space-grotesk);
  }
</style>
