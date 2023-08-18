<template>
  <div class="home-screen-logged-on">
    <img class="tall-bg-11" alt="" src="/tall-bg-1@2x.png" />
    <div class="home-screen-logged-on-child" />
    <img class="home-screen-logged-on-item" alt="" src="/ellipse-2.svg" />
    <img class="home-screen-logged-on-inner" alt="" src="/ellipse-3.svg" />
    <div class="section-1">
      <b class="long-headline-goes">Long Headline Goes Here.</b>
      <div class="lorem-ipsum-dolor-container4">
        <span class="lorem-ipsum-dolor-container5">
          <p class="log-in-line-1-line-2-inner">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <p class="log-in-line-1-line-2-inner">
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat.
          </p>
        </span>
      </div>
      <div class="signup-sign-in20" :onClick="openMentorCom">
        <b class="filter-by-country">Join our community</b>
        <img class="vector-icon30" alt="" src="/vector131.svg" />
      </div>
      <div class="signup-sign-in21" :onClick="openSignupPopup">
        <b class="filter-by-country">Apply as a mentor</b>
        <img class="vector-icon30" alt="" src="/vector131.svg" />
      </div>
    </div>
    <div class="section-21">
      <b class="our-mentors" data-scroll-to="ourMentorsText">Our Mentors.</b>
    </div>
    <div class="section-22">
      <b class="for-you">For You.</b>
    </div>
    <div class="section-23">
      <b class="reviews">Reviews.</b>
    </div>
    <div class="country-filter">
      <b class="filter-by-country">Filter By Country</b>
      <img class="vector-icon32" alt="" src="/vector141.svg" />
    </div>
    <div class="filter-by-services">
      <b class="filter-by-country">Filter By Services</b>
      <img class="vector-icon32" alt="" src="/vector141.svg" />
    </div>
    <div class="filter-by-scholarship">
      <b class="filter-by-country">Filter By Scholarship </b>
      <img class="vector-icon32" alt="" src="/vector141.svg" />
    </div>
    <div class="mentor-parent">
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture11@2x.png"
          />
          <div class="flags9">
            <img
              class="oman-icon"
              alt=""
              src="/united-states-of-america11@2x.png"
            />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture21@2x.png"
          />
          <div class="flags10">
            <img class="oman-icon" alt="" src="/oman@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame1">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture31@2x.png"
          />
          <div class="flags9">
            <img class="oman-icon" alt="" src="/egypt@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame2">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture41@2x.png"
          />
          <div class="flags9">
            <img class="oman-icon" alt="" src="/egypt@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame3">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture5@2x.png"
          />
          <div class="flags9">
            <img class="oman-icon" alt="" src="/bulgaria@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame4">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture6@2x.png"
          />
          <div class="flags9">
            <img class="oman-icon" alt="" src="/egypt@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame5">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture7@2x.png"
          />
          <div class="flags9">
            <img class="oman-icon" alt="" src="/egypt@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame6">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
      <div class="mentor4">
        <div class="profile-pic-flag6">
          <img
            class="profile-picture-icon6"
            alt=""
            src="/profile-picture8@2x.png"
          />
          <div class="flags9">
            <img class="oman-icon" alt="" src="/indonesia@2x.png" />
          </div>
        </div>
        <div class="mentors-name-here-wrapper4">
          <b class="filter-by-country">Mentor’s Name here.</b>
        </div>
        <div class="tag-parent6">
          <div class="tag34">
            <b class="filter-by-country">Bachelor</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#University Name</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Specialization</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Scholarship</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">Origin Country</b>
          </div>
          <div class="tag34">
            <b class="filter-by-country">#Tag 7</b>
          </div>
        </div>
        <div class="signup-sign-in22" :onClick="openFrame7">
          <b class="filter-by-country">Book Service.</b>
          <img class="vector-icon35" alt="" src="/vector121.svg" />
        </div>
      </div>
    </div>
    <div class="home-screen-logged-on-child1" />
    <div class="home-screen-logged-on-child2" />
    <img class="ellipse-icon" alt="" src="/ellipse-1.svg" />
    <img class="home-screen-logged-on-child3" alt="" src="/ellipse-4.svg" />
    <b class="ready-to-help">Ready to help others?</b>
    <div class="join-our-growing">Join our growing community today!</div>
    <div class="signup-sign-in30" :onClick="openMentorCom1">
      <b class="filter-by-country">Apply as a mentor</b>
      <img class="vector-icon43" alt="" src="/vector131.svg" />
    </div>
    <img class="home-screen-logged-on-child4" alt="" src="/vector-22.svg" />
    <img class="home-screen-logged-on-child5" alt="" src="/vector-61.svg" />
    <img class="home-screen-logged-on-child6" alt="" src="/vector-71.svg" />
    <div class="home-screen-logged-on-child7" />
    <div class="home-screen-logged-on-child8" />
    <div class="home-screen-logged-on-child9" />
    <div class="home-screen-logged-on-child10" />
    <div class="home-screen-logged-on-child11" />
    <div class="home-screen-logged-on-child12" />
    <div class="home-screen-logged-on-child13" />
    <div class="home-screen-logged-on-child14" />
    <div class="section-24">
      <b class="our-services">Our Services.</b>
    </div>
    <img class="home-screen-logged-on-child15" alt="" src="/vector-9.svg" />
    <img class="home-screen-logged-on-child16" alt="" src="/vector-111.svg" />
    <img class="home-screen-logged-on-child17" alt="" src="/vector-12.svg" />
    <img class="home-screen-logged-on-child18" alt="" src="/vector-12.svg" />
    <div class="review">
      <img class="review-child" alt="" src="/group-3.svg" />
      <b class="reviewers-name">Reviewer’s Name.</b>
      <div class="sapiente-occaecati-exercitatio">
        Sapiente occaecati exercitationem quasi eum corporis sit. Aut
        consectetur maxime debitis quam voluptatem aut consequatur voluptatum.
      </div>
      <div class="review-inner">
        <div class="instance-parent">
          <img class="frame-child5" alt="" src="/star-11.svg" />
          <img class="frame-child5" alt="" src="/star-2.svg" />
          <img class="frame-child5" alt="" src="/star-3.svg" />
          <img class="frame-child5" alt="" src="/star-4.svg" />
          <img class="frame-child5" alt="" src="/star-5.svg" />
        </div>
      </div>
    </div>
    <div class="review1">
      <img class="review-child" alt="" src="/group-31.svg" />
      <b class="reviewers-name">Reviewer’s Name.</b>
      <div class="sapiente-occaecati-exercitatio">
        Sapiente occaecati exercitationem quasi eum corporis sit. Aut
        consectetur maxime debitis quam voluptatem aut consequatur voluptatum.
      </div>
      <div class="review-inner">
        <div class="instance-parent">
          <img class="frame-child5" alt="" src="/star-12.svg" />
          <img class="frame-child5" alt="" src="/star-21.svg" />
          <img class="frame-child5" alt="" src="/star-31.svg" />
          <img class="frame-child5" alt="" src="/star-41.svg" />
          <img class="frame-child5" alt="" src="/star-51.svg" />
        </div>
      </div>
    </div>
    <div class="review2">
      <img class="review-child" alt="" src="/group-32.svg" />
      <b class="reviewers-name">Reviewer’s Name.</b>
      <div class="sapiente-occaecati-exercitatio">
        Sapiente occaecati exercitationem quasi eum corporis sit. Aut
        consectetur maxime debitis quam voluptatem aut consequatur voluptatum.
      </div>
      <div class="review-inner">
        <div class="instance-parent">
          <img class="frame-child5" alt="" src="/star-11.svg" />
          <img class="frame-child5" alt="" src="/star-2.svg" />
          <img class="frame-child5" alt="" src="/star-3.svg" />
          <img class="frame-child5" alt="" src="/star-4.svg" />
          <img class="frame-child5" alt="" src="/star-5.svg" />
        </div>
      </div>
    </div>
    <div class="arrow">
      <img class="vector-icon44" alt="" src="/vector151.svg" />
    </div>
    <div class="review3">
      <img class="review-child1" alt="" src="/group-33.svg" />
      <b class="reviewers-name">Reviewer’s Name.</b>
      <div class="sapiente-occaecati-exercitatio">
        Sapiente occaecati exercitationem quasi eum corporis sit. Aut
        consectetur maxime debitis quam voluptatem aut consequatur voluptatum.
      </div>
      <div class="review-inner">
        <div class="instance-parent">
          <img class="frame-child5" alt="" src="/star-11.svg" />
          <img class="frame-child5" alt="" src="/star-22.svg" />
          <img class="frame-child5" alt="" src="/star-32.svg" />
          <img class="frame-child5" alt="" src="/star-4.svg" />
          <img class="frame-child5" alt="" src="/star-5.svg" />
        </div>
      </div>
    </div>
    <div class="arrow1">
      <img class="vector-icon44" alt="" src="/vector161.svg" />
    </div>
    <div class="frame" />
    <div class="services3" data-scroll-to="servicesContainer">
      <div class="heads-group">
        <div class="heads1">
          <div class="service-12">
            <div class="service-1-item" />
            <b class="service-13">Service 1</b>
          </div>
          <div class="service-22">
            <div class="service-2-item" />
            <b class="service-23">Service 2</b>
          </div>
          <div class="service-32">
            <div class="service-3-item" />
            <b class="service-33">Service 3</b>
          </div>
          <div class="service-42">
            <div class="service-2-item" />
            <b class="service-33">Service 4</b>
          </div>
          <div class="service-52">
            <div class="service-2-item" />
            <b class="service-33">Service 5</b>
          </div>
        </div>
        <div class="frame-child25" />
        <div class="frame-parent7">
          <div class="vector-parent1">
            <img class="frame-child26" alt="" src="/vector-7.svg" />
            <b class="filter-by-country">Service price ( lowest : highest )</b>
          </div>
          <div class="signup-sign-in31">
            <b class="filter-by-country">Book Service</b>
            <img class="vector-icon30" alt="" src="/vector9.svg" />
          </div>
        </div>
        <div class="frame-parent8">
          <div class="vector-parent2">
            <img class="frame-child26" alt="" src="/vector-6.svg" />
            <img class="frame-child26" alt="" src="/vector-6.svg" />
          </div>
          <b class="filter-by-country">
            <p class="log-in-line-1-line-2-inner">Bullet Points Number 1</p>
            <p class="log-in-line-1-line-2-inner">&nbsp;</p>
            <p class="log-in-line-1-line-2-inner">Bullet Points Number 2</p>
          </b>
        </div>
        <div class="frame-parent9">
          <div class="vector-parent3">
            <img class="frame-child26" alt="" src="/vector-6.svg" />
            <img class="frame-child26" alt="" src="/vector-6.svg" />
          </div>
          <b class="filter-by-country">
            <p class="log-in-line-1-line-2-inner">Bullet Points Number 3</p>
            <p class="log-in-line-1-line-2-inner">&nbsp;</p>
            <p class="log-in-line-1-line-2-inner">Bullet Points Number 4</p>
          </b>
        </div>
        <div class="frame-parent10">
          <img class="frame-icon2" alt="" src="/frame2.svg" />
          <b class="filter-by-country">Discovery session</b>
        </div>
      </div>
    </div>
    <img class="home-screen-logged-on-child19" alt="" src="/vector-22.svg" />
    <div class="navigation-bar1">
      <div class="background3" />
      <div class="elements3">
        <div class="services4" :onClick="onServicesTextClick">Services</div>
        <div class="services4" :onClick="onExpertsTextClick">Experts</div>
        <div class="services4" :onClick="onHowItWorks1Click">How it works</div>
        <div class="blog3">Blog</div>
      </div>
      <div class="logo-with-text3">
        <img class="vector-icon47" alt="" src="/vector17.svg" />
        <b class="filter-by-country">
          <p class="log-in-line-1-line-2-inner">Mentor</p>
          <p class="log-in-line-1-line-2-inner">Valley</p>
        </b>
      </div>
    </div>
    <div class="vector-parent4">
      <img class="frame-child26" alt="" src="/vector-14.svg" />
      <div class="section-25">
        <b class="how-it-works4" data-scroll-to="howItWorks">How it works?</b>
      </div>
    </div>
    <div class="rectangle-parent">
      <div class="instance-child" />
      <div class="instance-item" />
      <div class="log-in-line-container1">
        <ul class="line-ul">
          <li class="line-li">Log in</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <p class="log-in-line-1-line-2-inner">Line 1</p>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <p class="log-in-line-1-line-2-inner">Line 2</p>
      </div>
      <div class="join-our-community-container1">
        <ul class="line-ul">
          <li class="line-li">Join our community</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <ul class="line-ul">
          <li class="line-li">Line 1</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <ul class="line-ul">
          <li>Line 2</li>
        </ul>
      </div>
      <div class="list-your-services-container1">
        <ul class="line-ul">
          <li class="line-li">List your services</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <ul class="line-ul">
          <li class="line-li">Line 1</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <ul class="line-ul">
          <li>Line 2</li>
        </ul>
      </div>
      <div class="get-paid-line-container1">
        <ul class="line-ul">
          <li class="line-li">get paid.</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <ul class="line-ul">
          <li class="line-li">Line 1</li>
        </ul>
        <p class="log-in-line-1-line-2-inner">&nbsp;</p>
        <ul class="line-ul">
          <li>Line 2</li>
        </ul>
      </div>
      <div class="instance-inner" />
      <img class="frame-icon3" alt="" src="/frame3.svg" />
      <div class="instance-child1" />
      <img
        class="select-category-svgrepo-com-2-icon1"
        alt=""
        src="/selectcategorysvgrepocom-2.svg"
      />
      <div class="instance-child2" />
      <div class="tag-parent14">
        <div class="tag82">
          <img
            class="done-fill0-wght400-grad0-opsz4-icon3"
            alt=""
            src="/done-fill0-wght400-grad0-opsz48-13.svg"
          />
          <b class="filter-by-country">For Mentors</b>
        </div>
        <div class="tag83">
          <b class="filter-by-country">For Students</b>
        </div>
      </div>
      <img
        class="people-community-svgrepo-com-2-icon1"
        alt=""
        src="/peoplecommunitysvgrepocom-21.svg"
      />
      <img
        class="professor-svgrepo-com-2-icon1"
        alt=""
        src="/professorsvgrepocom-21.svg"
      />
    </div>
    <div class="menu1">
      <b class="filter-by-country">Username.</b>
      <img class="vector-icon48" alt="" src="/vector6.svg" />
    </div>
    <div class="footer">
      <div class="background4" />
      <div class="footer-ui">
        <div class="divider38" />
        <div class="subscribe">
          <div class="text-field">
            <div class="fill-parent">
              <div class="fill" />
              <img class="fill-icon" alt="" src="/fill.svg" />
              <img
                class="arrows-down-top-move-1-icon"
                alt=""
                src="/arrowsdowntopmove1.svg"
              />
              <div class="label">NewsLetter.</div>
            </div>
          </div>
          <div class="product">Subscribe</div>
        </div>
        <div class="quick-links">
          <div class="employee-database">#Link 2</div>
          <div class="employee-database1">#Link 4</div>
          <div class="product1">Quick Links</div>
          <div class="employee-database2">#Link 1</div>
          <div class="employee-database3">#Link 3</div>
        </div>
        <div class="content-under-divider">
          <div class="pricing-wrapper">
            <div class="pricing">© 2023 Media Media. All rights reserved</div>
          </div>
          <img class="social-links-icon1" alt="" src="/social-links1.svg" />
        </div>
      </div>
      <img class="vector-icon49" alt="" src="/vector181.svg" />
      <b class="mentor-valley5">Mentor Valley.</b>
    </div>
  </div>
  <div v-if="isMentorComOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeMentorCom"
    >
      <MentorCom :onClose="closeMentorCom" />
    </PortalPopup>
  </div>
  <div v-if="isSignupPopupOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeSignupPopup"
    >
      <SignupPopup :onClose="closeSignupPopup" />
    </PortalPopup>
  </div>
  <div v-if="isFrameOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame"
    >
      <frame :onClose="closeFrame" />
    </PortalPopup>
  </div>
  <div v-if="isFrame1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame1"
    >
      <frame :onClose="closeFrame1" />
    </PortalPopup>
  </div>
  <div v-if="isFrame2Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame2"
    >
      <frame :onClose="closeFrame2" />
    </PortalPopup>
  </div>
  <div v-if="isFrame3Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame3"
    >
      <frame :onClose="closeFrame3" />
    </PortalPopup>
  </div>
  <div v-if="isFrame4Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame4"
    >
      <frame :onClose="closeFrame4" />
    </PortalPopup>
  </div>
  <div v-if="isFrame5Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame5"
    >
      <frame :onClose="closeFrame5" />
    </PortalPopup>
  </div>
  <div v-if="isFrame6Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame6"
    >
      <frame :onClose="closeFrame6" />
    </PortalPopup>
  </div>
  <div v-if="isFrame7Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeFrame7"
    >
      <frame :onClose="closeFrame7" />
    </PortalPopup>
  </div>
  <div v-if="isMentorCom1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :onOutsideClick="closeMentorCom1"
    >
      <MentorCom :onClose="closeMentorCom1" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import MentorCom from "../components/MentorCom..vue";
  import PortalPopup from "../components/PortalPopup..vue";
  import SignupPopup from "../components/SignupPopup..vue";
  import Frame from "../components/Frame..vue";

  export default defineComponent({
    name: "HomeScreenLoggedOn",
    data() {
      return {
        isMentorComOpen: false,
        isSignupPopupOpen: false,
        isFrameOpen: false,
        isFrame1Open: false,
        isFrame2Open: false,
        isFrame3Open: false,
        isFrame4Open: false,
        isFrame5Open: false,
        isFrame6Open: false,
        isFrame7Open: false,
        isMentorCom1Open: false,
      };
    },
    components: { MentorCom, PortalPopup, SignupPopup, Frame },
    methods: {
      openMentorCom() {
        this.isMentorComOpen = true;
      },
      closeMentorCom() {
        this.isMentorComOpen = false;
      },
      openSignupPopup() {
        this.isSignupPopupOpen = true;
      },
      closeSignupPopup() {
        this.isSignupPopupOpen = false;
      },
      openFrame() {
        this.isFrameOpen = true;
      },
      closeFrame() {
        this.isFrameOpen = false;
      },
      openFrame1() {
        this.isFrame1Open = true;
      },
      closeFrame1() {
        this.isFrame1Open = false;
      },
      openFrame2() {
        this.isFrame2Open = true;
      },
      closeFrame2() {
        this.isFrame2Open = false;
      },
      openFrame3() {
        this.isFrame3Open = true;
      },
      closeFrame3() {
        this.isFrame3Open = false;
      },
      openFrame4() {
        this.isFrame4Open = true;
      },
      closeFrame4() {
        this.isFrame4Open = false;
      },
      openFrame5() {
        this.isFrame5Open = true;
      },
      closeFrame5() {
        this.isFrame5Open = false;
      },
      openFrame6() {
        this.isFrame6Open = true;
      },
      closeFrame6() {
        this.isFrame6Open = false;
      },
      openFrame7() {
        this.isFrame7Open = true;
      },
      closeFrame7() {
        this.isFrame7Open = false;
      },
      openMentorCom1() {
        this.isMentorCom1Open = true;
      },
      closeMentorCom1() {
        this.isMentorCom1Open = false;
      },
      onServicesTextClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='servicesContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onExpertsTextClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='ourMentorsText']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onHowItWorks1Click() {
        const anchor = document.querySelector("[data-scroll-to='howItWorks']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
<style scoped>
  .tall-bg-11 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 4288px;
    object-fit: cover;
  }
  .home-screen-logged-on-child {
    position: absolute;
    top: 3555px;
    left: -1px;
    background-color: var(--color-mediumslateblue);
    width: 1441px;
    height: 677px;
    mix-blend-mode: multiply;
  }
  .home-screen-logged-on-item {
    position: absolute;
    top: 3634px;
    left: 1304px;
    width: 223px;
    height: 223px;
  }
  .home-screen-logged-on-inner {
    position: absolute;
    top: 3988px;
    left: 24px;
    width: 223px;
    height: 223px;
  }
  .long-headline-goes {
    position: absolute;
    top: 0px;
    left: calc(50% - 439px);
    font-size: 72px;
  }
  .lorem-ipsum-dolor-container5 {
    line-break: anywhere;
    width: 100%;
  }
  .lorem-ipsum-dolor-container4 {
    position: absolute;
    top: 116px;
    left: calc(50% - 529px);
    font-size: var(--font-size-21xl);
    font-weight: 500;
    display: flex;
    align-items: center;
    width: 1058px;
  }
  .vector-icon30 {
    position: relative;
    width: 15px;
    height: 24px;
  }
  .signup-sign-in20 {
    position: absolute;
    top: 313.5px;
    left: calc(50% - 376.5px);
    border-radius: var(--br-59xl);
    background-color: var(--color-orange);
    box-shadow: 5px 6px 0px #2e2e2e;
    border: 3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 362px;
    height: 83px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-5xl);
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    cursor: pointer;
    color: var(--color-darkslategray);
  }
  .signup-sign-in21 {
    position: absolute;
    top: 313.5px;
    left: calc(50% + 14.5px);
    border-radius: var(--br-59xl);
    background-color: var(--color-snow);
    box-shadow: 5px 6px 0px #2e2e2e;
    border: 3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 362px;
    height: 83px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-5xl);
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    cursor: pointer;
    color: var(--color-darkslategray);
  }
  .section-1 {
    position: absolute;
    top: 162px;
    left: calc(50% - 529px);
    width: 1058px;
    height: 395px;
    text-align: center;
    font-size: var(--font-size-8xl);
    color: var(--color-black);
  }
  .our-mentors {
    position: absolute;
    top: 0px;
    left: calc(50% - 150.5px);
  }
  .section-21 {
    position: absolute;
    top: 1430px;
    left: calc(50% - 150px);
    width: 301px;
    height: 61px;
    text-align: center;
    color: var(--color-black);
  }
  .for-you {
    position: absolute;
    top: 0px;
    left: calc(50% - 92.5px);
  }
  .section-22 {
    position: absolute;
    top: 3603px;
    left: calc(50% - 92px);
    width: 185px;
    height: 61px;
    text-align: center;
    color: var(--white);
  }
  .reviews {
    position: absolute;
    top: 0px;
    left: calc(50% - 101px);
  }
  .section-23 {
    position: absolute;
    top: 4274px;
    left: calc(50% - 96px);
    width: 202px;
    height: 61px;
    text-align: center;
  }
  .filter-by-country {
    position: relative;
  }
  .vector-icon32 {
    position: relative;
    width: 16px;
    height: 16px;
  }
  .country-filter {
    position: absolute;
    top: 1515px;
    left: 290px;
    border-radius: var(--br-28xl);
    background-color: var(--color-lightcoral);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-5xs) var(--padding-base);
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
    font-size: var(--font-size-5xl);
  }
  .filter-by-services {
    position: absolute;
    top: 1515px;
    left: 570px;
    border-radius: var(--br-28xl);
    background-color: var(--color-lightcoral);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-5xs) var(--padding-base);
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
    font-size: var(--font-size-5xl);
  }
  .filter-by-scholarship {
    position: absolute;
    top: 1515px;
    left: 853px;
    border-radius: var(--br-28xl);
    background-color: var(--color-lightcoral);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-5xs) var(--padding-base);
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
    font-size: var(--font-size-5xl);
  }
  .profile-picture-icon6 {
    position: relative;
    border-radius: var(--br-36xl) var(--br-36xl) var(--br-36xl) 0px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    z-index: 0;
  }
  .flags9 {
    position: absolute;
    margin: 0 !important;
    top: 164px;
    left: 0px;
    width: 54px;
    height: 36px;
    z-index: 1;
  }
  .profile-pic-flag6 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
  }
  .mentors-name-here-wrapper4 {
    height: 36px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .tag34 {
    border-radius: var(--br-28xl);
    background-color: var(--color-linen);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-5xs) var(--padding-base);
    align-items: center;
    justify-content: center;
  }
  .tag-parent6 {
    width: 279px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    font-size: var(--font-size-base);
  }
  .vector-icon35 {
    position: relative;
    width: 7.5px;
    height: 12px;
    display: none;
  }
  .signup-sign-in22 {
    border-radius: var(--br-20xl);
    background-color: var(--color-snow);
    box-shadow: 2.5px 3px 0px #2e2e2e;
    border: 1.5px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 181px;
    height: 41.5px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-xs);
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size-sm-5);
  }
  .mentor4 {
    border-radius: var(--br-7xl);
    background-color: var(--color-yellowgreen);
    width: 309px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-5xl) var(--padding-mini);
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-2xs);
  }
  .oman-icon {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-5xs) var(--br-5xs) var(--br-5xs) 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .flags10 {
    position: absolute;
    margin: 0 !important;
    top: 164px;
    left: 0px;
    border-radius: var(--br-5xs) var(--br-5xs) var(--br-5xs) 0px;
    width: 54px;
    height: 36px;
    z-index: 1;
  }
  .mentor-parent {
    position: absolute;
    top: 1609px;
    left: 76px;
    width: 1296px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    font-size: var(--font-size-9xl);
  }
  .home-screen-logged-on-child1 {
    position: absolute;
    top: 2630px;
    left: 0px;
    background-color: var(--color-aquamarine);
    width: 1440px;
    height: 216px;
    mix-blend-mode: multiply;
  }
  .home-screen-logged-on-child2 {
    position: absolute;
    top: 2630px;
    left: 0px;
    background-color: var(--color-aquamarine);
    width: 1440px;
    height: 216px;
    mix-blend-mode: saturation;
  }
  .ellipse-icon {
    position: absolute;
    top: 2702px;
    left: 1419px;
    width: 79px;
    height: 79px;
  }
  .home-screen-logged-on-child3 {
    position: absolute;
    top: 1348px;
    left: 0px;
    width: 207px;
    height: 207px;
  }
  .ready-to-help {
    position: absolute;
    top: 2678px;
    left: 76px;
  }
  .join-our-growing {
    position: absolute;
    top: 2747px;
    left: 76px;
    font-size: var(--font-size-13xl);
  }
  .vector-icon43 {
    position: relative;
    width: 15px;
    height: 24px;
    display: none;
  }
  .signup-sign-in30 {
    position: absolute;
    top: 2696.5px;
    left: 1007.5px;
    border-radius: var(--br-59xl);
    background-color: var(--color-snow);
    box-shadow: 5px 6px 0px #2e2e2e;
    border: 3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 362px;
    height: 83px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-5xl);
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size-8xl);
  }
  .home-screen-logged-on-child4 {
    position: absolute;
    top: 2760.35px;
    left: 0px;
    width: 85px;
    height: 61.93px;
  }
  .home-screen-logged-on-child5 {
    position: absolute;
    top: 2662.07px;
    left: 1173.3px;
    width: 31.43px;
    height: 22.57px;
  }
  .home-screen-logged-on-child6 {
    position: absolute;
    top: 2796.36px;
    left: 1173.27px;
    width: 31.43px;
    height: 22.57px;
  }
  .home-screen-logged-on-child7 {
    position: absolute;
    top: 3696px;
    left: calc(50% + 490px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child8 {
    position: absolute;
    top: 3952px;
    left: calc(50% + 370px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child9 {
    position: absolute;
    top: 3696px;
    left: calc(50% - 842px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child10 {
    position: absolute;
    top: 3952px;
    left: calc(50% - 962px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child11 {
    position: absolute;
    top: 3696px;
    left: calc(50% - 397px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child12 {
    position: absolute;
    top: 3952px;
    left: calc(50% - 517px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child13 {
    position: absolute;
    top: 3696px;
    left: calc(50% + 48px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .home-screen-logged-on-child14 {
    position: absolute;
    top: 3952px;
    left: calc(50% - 72px);
    border-radius: var(--br-12xl);
    background-color: var(--color-linen);
    width: 427px;
    height: 232px;
  }
  .our-services {
    position: absolute;
    top: 0px;
    left: calc(50% - 152px);
  }
  .section-24 {
    position: absolute;
    top: 684px;
    left: calc(50% - 152px);
    width: 304px;
    height: 61px;
    text-align: center;
    color: var(--color-black);
  }
  .home-screen-logged-on-child15 {
    position: absolute;
    top: 699.27px;
    left: 524.07px;
    width: 22.57px;
    height: 31.43px;
  }
  .home-screen-logged-on-child16 {
    position: absolute;
    top: 1445.27px;
    left: 526.07px;
    width: 22.57px;
    height: 31.43px;
  }
  .home-screen-logged-on-child17 {
    position: absolute;
    top: 3618.27px;
    left: 584.07px;
    width: 22.57px;
    height: 31.43px;
  }
  .home-screen-logged-on-child18 {
    position: absolute;
    top: 4289.27px;
    left: 580.07px;
    width: 22.57px;
    height: 31.43px;
  }
  .review-child {
    position: relative;
    width: 191.53px;
    height: 190.22px;
  }
  .reviewers-name {
    position: relative;
    line-height: 39.84px;
  }
  .sapiente-occaecati-exercitatio {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-5xl);
    line-height: 35.85px;
    font-weight: 500;
    text-align: center;
  }
  .frame-child5 {
    position: relative;
    width: 27.87px;
    height: 27.87px;
  }
  .instance-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .review-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .review {
    position: absolute;
    top: 4366px;
    left: 76px;
    border-radius: 31.87px;
    background-color: var(--color-orange);
    box-shadow: 19.917774200439453px 7.967111110687256px 79.67px
      rgba(0, 0, 0, 0.16);
    width: 418px;
    display: flex;
    flex-direction: column;
    padding: var(--padding-base);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
    font-size: var(--font-size-13xl);
  }
  .review1 {
    position: absolute;
    top: 4366px;
    left: 516px;
    border-radius: 31.87px;
    background-color: var(--color-orange);
    box-shadow: 19.917774200439453px 7.967111110687256px 79.67px
      rgba(0, 0, 0, 0.16);
    width: 419px;
    display: flex;
    flex-direction: column;
    padding: var(--padding-base);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
    font-size: var(--font-size-13xl);
  }
  .review2 {
    position: absolute;
    top: 4366px;
    left: 957px;
    border-radius: 31.87px;
    background-color: var(--color-orange);
    box-shadow: 19.917774200439453px 7.967111110687256px 79.67px
      rgba(0, 0, 0, 0.16);
    width: 418px;
    display: flex;
    flex-direction: column;
    padding: var(--padding-base);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
    font-size: var(--font-size-13xl);
  }
  .vector-icon44 {
    position: relative;
    width: 32px;
    height: 32px;
  }
  .arrow {
    position: absolute;
    top: 4767px;
    left: 106px;
    border-radius: var(--br-59xl);
    background-color: var(--white);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .review-child1 {
    position: relative;
    width: 159.72px;
    height: 158.41px;
  }
  .review3 {
    position: absolute;
    top: 4366px;
    left: 1397px;
    border-radius: 31.87px;
    background-color: var(--color-orange);
    box-shadow: 19.917774200439453px 7.967111110687256px 79.67px
      rgba(0, 0, 0, 0.16);
    width: 418px;
    display: flex;
    flex-direction: column;
    padding: var(--padding-base);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
    font-size: var(--font-size-13xl);
  }
  .arrow1 {
    position: absolute;
    top: 4589px;
    left: 1345px;
    border-radius: var(--br-59xl);
    background-color: var(--color-red);
    box-shadow: 2.5px 3px 0px #2e2e2e;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame {
    position: absolute;
    top: 54px;
    left: 494px;
    width: 81px;
    height: 239px;
    overflow: hidden;
  }
  .service-1-item {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-36xl) var(--br-36xl) 0px 0px;
    background-color: var(--color-orange);
    width: 253px;
    height: 80px;
  }
  .service-13 {
    position: absolute;
    top: 20px;
    left: 58px;
  }
  .service-12 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 253px;
    height: 80px;
  }
  .service-2-item {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-6xl) var(--br-6xl) 0px 0px;
    background-color: var(--color-linen);
    width: 253px;
    height: 80px;
  }
  .service-23 {
    position: absolute;
    top: 20px;
    left: 56px;
  }
  .service-22 {
    position: absolute;
    top: 0px;
    left: 285px;
    width: 253px;
    height: 80px;
  }
  .service-3-item {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 126.5px);
    border-radius: var(--br-6xl) var(--br-6xl) 0px 0px;
    background-color: var(--color-linen);
    width: 253px;
    height: 80px;
  }
  .service-33 {
    position: absolute;
    top: 20px;
    left: 55px;
  }
  .service-32 {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 126.5px);
    width: 253px;
    height: 80px;
  }
  .service-42 {
    position: absolute;
    top: 0px;
    left: 855px;
    width: 253px;
    height: 80px;
  }
  .service-52 {
    position: absolute;
    top: 0px;
    left: 1140px;
    width: 253px;
    height: 80px;
  }
  .heads1 {
    position: relative;
    width: 1393px;
    height: 80px;
    z-index: 0;
  }
  .frame-child25 {
    position: relative;
    border-radius: 0px 0px var(--br-36xl) var(--br-36xl);
    background-color: var(--color-orange);
    width: 1393px;
    height: 517px;
    mix-blend-mode: multiply;
    z-index: 1;
  }
  .frame-child26 {
    position: relative;
    width: 22.57px;
    height: 31.43px;
  }
  .vector-parent1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-base);
  }
  .signup-sign-in31 {
    border-radius: var(--br-59xl);
    background-color: var(--color-snow);
    box-shadow: 5px 6px 0px #2e2e2e;
    border: 3px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 362px;
    height: 83px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-5xl);
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
    font-size: var(--font-size-8xl);
    color: var(--color-darkslategray);
  }
  .frame-parent7 {
    margin: 0 !important;
    position: absolute;
    top: 404px;
    left: 463px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-13xl);
    z-index: 2;
    font-size: var(--font-size-9xl);
  }
  .vector-parent2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-28xl);
  }
  .frame-parent8 {
    margin: 0 !important;
    position: absolute;
    top: 245px;
    left: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    z-index: 3;
    text-align: left;
    font-size: var(--font-size-9xl);
  }
  .vector-parent3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-27xl);
  }
  .frame-parent9 {
    margin: 0 !important;
    position: absolute;
    top: 245px;
    left: 902px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    z-index: 4;
    text-align: left;
    font-size: var(--font-size-10xl);
  }
  .frame-icon2 {
    position: relative;
    width: 41px;
    height: 52px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .frame-parent10 {
    margin: 0 !important;
    position: absolute;
    top: 128px;
    left: calc(50% - 167.5px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    z-index: 5;
  }
  .heads-group {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .services3 {
    position: absolute;
    top: 793px;
    left: 20px;
    width: 1392px;
    height: 695px;
    text-align: center;
    font-size: var(--font-size-13xl);
    color: var(--color-black);
  }
  .home-screen-logged-on-child19 {
    position: absolute;
    top: 935.35px;
    left: 1393.61px;
    width: 85px;
    height: 61.93px;
  }
  .background3 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-linen);
  }
  .services4 {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .blog3 {
    position: relative;
    font-weight: 600;
  }
  .elements3 {
    position: absolute;
    height: 20%;
    width: 26.39%;
    top: 44%;
    right: 23.78%;
    bottom: 36%;
    left: 49.83%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-21xl);
  }
  .vector-icon47 {
    position: relative;
    width: 48.86px;
    height: 48.86px;
  }
  .logo-with-text3 {
    position: absolute;
    height: 68%;
    width: 10.13%;
    top: 15.14%;
    right: 82.04%;
    bottom: 16.86%;
    left: 7.84%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.95px;
    text-align: left;
    font-size: var(--font-size-8xl);
  }
  .navigation-bar1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 100px;
    text-align: center;
    font-size: var(--font-size-base);
  }
  .how-it-works4 {
    position: absolute;
    top: 0px;
    left: calc(50% - 161.5px);
  }
  .section-25 {
    position: relative;
    width: 323px;
    height: 61px;
  }
  .vector-parent4 {
    position: absolute;
    top: 2886px;
    left: calc(50% - 182px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    text-align: center;
  }
  .instance-child {
    position: relative;
    border-radius: var(--br-16xl);
    background-color: var(--color-yellowgreen);
    width: 1392px;
    height: 549px;
    mix-blend-mode: multiply;
    z-index: 0;
  }
  .instance-item {
    position: absolute;
    margin: 0 !important;
    top: 102px;
    left: 71px;
    border-radius: var(--br-83xl);
    background-color: var(--color-linen);
    width: 284px;
    height: 160px;
    z-index: 1;
  }
  .log-in-line-1-line-2-inner {
    margin: 0;
  }
  .log-in-line-container1 {
    position: absolute;
    margin: 0 !important;
    top: 270px;
    left: 160px;
    font-weight: 600;
    z-index: 2;
  }
  .line-li {
    margin-bottom: 0px;
  }
  .line-ul {
    margin: 0;
    padding-left: var(--padding-13xl);
  }
  .join-our-community-container1 {
    position: absolute;
    margin: 0 !important;
    top: 270px;
    left: 404px;
    font-weight: 600;
    z-index: 3;
  }
  .list-your-services-container1 {
    position: absolute;
    margin: 0 !important;
    top: 270px;
    left: 730px;
    font-weight: 600;
    z-index: 4;
  }
  .get-paid-line-container1 {
    position: absolute;
    margin: 0 !important;
    top: 270px;
    left: 1092px;
    font-weight: 600;
    z-index: 5;
  }
  .instance-inner {
    position: absolute;
    margin: 0 !important;
    top: 102px;
    left: 396px;
    border-radius: var(--br-83xl);
    background-color: var(--color-linen);
    width: 284px;
    height: 160px;
    z-index: 6;
  }
  .frame-icon3 {
    position: absolute;
    margin: 0 !important;
    top: 131px;
    left: 163px;
    width: 101px;
    height: 101px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 7;
  }
  .instance-child1 {
    position: absolute;
    margin: 0 !important;
    top: 102px;
    left: 709px;
    border-radius: var(--br-83xl);
    background-color: var(--color-linen);
    width: 284px;
    height: 160px;
    z-index: 8;
  }
  .select-category-svgrepo-com-2-icon1 {
    position: absolute;
    margin: 0 !important;
    top: 122px;
    left: 791px;
    width: 120px;
    height: 120px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 9;
  }
  .instance-child2 {
    position: absolute;
    margin: 0 !important;
    top: 102px;
    left: 1020px;
    border-radius: var(--br-83xl);
    background-color: var(--color-linen);
    width: 284px;
    height: 160px;
    z-index: 10;
  }
  .done-fill0-wght400-grad0-opsz4-icon3 {
    position: relative;
    width: 18.93px;
    height: 18.93px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .tag82 {
    border-radius: 55.61px;
    background-color: var(--color-mediumslateblue);
    border: 1.8px solid var(--color-darkslategray);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-3xs) var(--padding-xl);
    align-items: center;
    justify-content: center;
    gap: var(--gap-2xs);
  }
  .tag83 {
    border-radius: 55.61px;
    background-color: var(--color-linen);
    box-shadow: 2.9578378200531006px 3.549405336380005px 0px #2e2e2e;
    border: 1.8px solid var(--color-darkslategray);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--padding-3xs) var(--padding-xl);
    align-items: center;
    justify-content: center;
    color: var(--color-darkslategray);
  }
  .tag-parent14 {
    margin: 0 !important;
    position: absolute;
    top: 32px;
    left: calc(50% - 172px);
    width: 363px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 23.66px;
    z-index: 11;
    font-size: 18.93px;
    color: var(--color-linen);
    font-family: var(--font-space-grotesk);
  }
  .people-community-svgrepo-com-2-icon1 {
    position: absolute;
    margin: 0 !important;
    top: 128px;
    left: 484px;
    width: 108px;
    height: 108px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 12;
  }
  .professor-svgrepo-com-2-icon1 {
    position: absolute;
    margin: 0 !important;
    top: 125px;
    left: 1105px;
    width: 114px;
    height: 114px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 13;
  }
  .rectangle-parent {
    position: absolute;
    top: 2963px;
    left: calc(50% - 696px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    font-size: var(--font-inherit);
    font-family: var(--font-inherit);
  }
  .vector-icon48 {
    position: relative;
    width: 12px;
    height: 7.5px;
  }
  .menu1 {
    position: absolute;
    top: 29.25px;
    left: 1178.25px;
    border-radius: var(--br-20xl);
    background-color: var(--color-mediumslateblue);
    box-shadow: 2.5px 3px 0px #2e2e2e;
    border: 1.5px solid var(--color-darkslategray);
    box-sizing: border-box;
    width: 181px;
    height: 41.5px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-5xs) var(--padding-xs);
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
    text-align: center;
    font-size: var(--font-size-sm-5);
    color: var(--color-linen);
  }
  .background4 {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray);
    width: 1440px;
    height: 358px;
  }
  .divider38 {
    position: absolute;
    height: 0.84%;
    width: 100.05%;
    top: 70.14%;
    right: 0%;
    bottom: 29.03%;
    left: -0.05%;
    background-color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    opacity: 0.2;
  }
  .fill {
    position: absolute;
    height: 102%;
    width: 100.4%;
    top: -1%;
    right: -0.2%;
    bottom: -1%;
    left: -0.2%;
    border-radius: 6px;
    background-color: var(--white);
    border: 1px solid rgba(0, 0, 124, 0.2);
    box-sizing: border-box;
  }
  .fill-icon {
    position: absolute;
    height: 100%;
    width: 20.16%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 79.84%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .arrows-down-top-move-1-icon {
    position: absolute;
    height: 26%;
    width: 6.16%;
    top: 38%;
    right: 6.74%;
    bottom: 36%;
    left: 87.1%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .label {
    position: absolute;
    top: 36%;
    left: 6.05%;
    opacity: 0.65;
  }
  .fill-parent {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .text-field {
    position: absolute;
    height: 48.54%;
    width: 100%;
    top: 51.46%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .product {
    position: absolute;
    width: 36.29%;
    top: 0%;
    left: 0%;
    font-size: var(--font-size-lg);
    line-height: 28px;
    font-weight: 500;
    color: var(--white);
    display: inline-block;
  }
  .subscribe {
    position: absolute;
    height: 43.02%;
    width: 23.09%;
    top: 12.11%;
    right: 0%;
    bottom: 44.87%;
    left: 76.91%;
    font-size: var(--font-size-sm);
  }
  .employee-database {
    position: absolute;
    top: 38.97%;
    left: 80.82%;
  }
  .employee-database1 {
    position: absolute;
    top: 85.29%;
    left: 80.82%;
  }
  .product1 {
    position: absolute;
    width: 36.64%;
    top: 0%;
    left: 0%;
    font-size: var(--font-size-lg);
    line-height: 28px;
    font-weight: 500;
    color: var(--white);
    display: inline-block;
  }
  .employee-database2 {
    position: absolute;
    top: 38.97%;
    left: 0%;
  }
  .employee-database3 {
    position: absolute;
    top: 85.29%;
    left: 0%;
  }
  .quick-links {
    position: absolute;
    height: 56.8%;
    width: 27.19%;
    top: 0%;
    right: 43.85%;
    bottom: 43.2%;
    left: 28.96%;
    color: var(--color-linen);
  }
  .pricing {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .pricing-wrapper {
    position: absolute;
    height: 57.14%;
    width: 28.24%;
    top: 28.57%;
    right: 0%;
    bottom: 14.29%;
    left: 71.76%;
  }
  .social-links-icon1 {
    position: absolute;
    height: 104.29%;
    width: 12.72%;
    top: -2.14%;
    right: 87.35%;
    bottom: -2.14%;
    left: -0.07%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .content-under-divider {
    position: absolute;
    height: 14.62%;
    width: 99.91%;
    top: 85.38%;
    right: 0%;
    bottom: 0%;
    left: 0.09%;
    text-align: right;
    color: var(--white);
  }
  .footer-ui {
    position: absolute;
    height: 66.88%;
    width: 74.58%;
    top: 21.51%;
    right: 12.71%;
    bottom: 11.61%;
    left: 12.71%;
  }
  .vector-icon49 {
    position: absolute;
    top: 77px;
    left: 244px;
    width: 80px;
    height: 80px;
  }
  .mentor-valley5 {
    position: absolute;
    top: 169px;
    left: 181px;
    font-size: 29.6px;
    color: var(--color-linen);
  }
  .footer {
    position: absolute;
    top: 4917px;
    left: 0px;
    width: 1440px;
    height: 358px;
    font-size: var(--font-size-base);
    color: var(--dark);
  }
  .home-screen-logged-on {
    position: relative;
    background-color: var(--white);
    width: 100%;
    height: 5275px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-29xl);
    color: var(--color-darkslategray);
    font-family: var(--font-space-grotesk);
  }
</style>
