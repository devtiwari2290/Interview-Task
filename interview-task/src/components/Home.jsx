import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const Home = () => {
  // Reusable feature card
  const FeatureBox = ({ icon, label }) => (
    <div className="w-40 h-36 bg-white shadow-lg rounded-3xl flex flex-col items-center justify-center text-black p-4">
      <img src={icon} alt="" />
      <p className="text-center font-semibold text-lg pt-2">{label}</p>
    </div>
  );

  return (
    <div className="w-full min-h-screen pt-10 md:pt-20">
      {/* Banner Section */}
      <div className="about w-full h-auto md:h-[70vh] bg-[#EA1777] flex flex-col-reverse md:flex-row justify-around relative px-4 py-10 md:py-0">
        {/* Left Section */}
        <div className="flex flex-col justify-center max-w-xl text-center md:text-left z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Personal <br /> loans for <br /> kicking goals
          </h1>
          <div className="mt-8 flex flex-col md:flex-row md:justify-start justify-center items-center gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Loan Features */}
              <FeatureBox
                icon="https://a.storyblok.com/f/116740/36x36/d1b44c38b0/coins.svg"
                label="Apply for a personal loan"
              />
              <FeatureBox
                icon="https://a.storyblok.com/f/116740/36x32/bb1ceaa8d7/piggy-bank.svg"
                label="Calculate your loan"
              />
              <FeatureBox
                icon="https://a.storyblok.com/f/116740/24x24/bd87cbec68/file-check-02.svg"
                label="Eligibility criteria"
              />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-8 md:mb-0">
          <img
            src="https://www.loans.com.au/media/banners/banner-hand-au-home-loans.png"
            alt="Loan Banner"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-[70vh] object-contain"
          />
        </div>
      </div>

      {/* Loan Calculator Style Section */}
      <div className="w-full py-12 px-6 bg-white flex flex-col md:flex-row justify-center gap-8 mt-16">
        {/* Left Form */}
        <div className="w-full max-w-md bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="home text-2xl font-bold mb-4">
            Enter your loan details
          </h2>
          <input
            type="number"
            placeholder="I want to borrow..."
            className="w-full mb-4 p-3 rounded-md border"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2 mb-4">
            {["3 years", "4 years", "5 years", "7 years"].map((year, index) => (
              <button
                key={index}
                className={`px-3 py-2 text-sm rounded-md border hover:bg-[#EA1777] hover:text-white ${
                  year === "5 years" ? "bg-[#EA1777] text-white" : ""
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <select className="w-full mb-4 p-3 rounded-md border">
            <option value="">Residential status</option>
            <option value="own">Own</option>
            <option value="rent">Rent</option>
          </select>
          <select className="w-full p-3 rounded-md border">
            <option value="">Credit score</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
          </select>
        </div>

        {/* Right Calculation Output */}
        <div className="w-full max-w-md bg-black text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Estimated monthly repayments
            </h3>
            <p className="text-5xl font-bold">0.00</p>
          </div>
          <div className="mt-6">
            <p>
              Example variable interest rate: <strong>5.99% p.a.</strong>
            </p>
            <p>
              Comparison rate: <strong>6.70% p.a.</strong>
            </p>
            <p>
              Total charges: <strong>$0.00</strong>
            </p>
            <p>
              Total repayments: <strong>$0.00</strong>
            </p>
          </div>
          <button className="mt-6 bg-[#EA1777] py-3 rounded-lg text-white font-semibold">
            Get a quote
          </button>
          <p className="text-xs mt-2 text-gray-400">
            It won’t affect your credit score!
          </p>
        </div>
      </div>

      {/* Just some of the lenders whose rates we compare  Section*/}
      <div className="w-full px-6 bg-white mt-16">
        <h2 className="home text-base font-bold uppercase text-center underline">
          Just some of the lenders whose rates we compare
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 mt-3 px-10">
          {/* Image 1 */}
          <img
            src="https://a.storyblok.com/f/116740/132x132/b3d6a4ac0c/commbank-logo.png/m/filters:format(webp)"
            alt=""
            className="w-20 h-24 object-contain mx-auto"
          />
          {/* Image 2 */}
          <img
            src="https://a.storyblok.com/f/116740/160x100/eee0d82e08/westpac.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 3 */}
          <img
            src="https://a.storyblok.com/f/116740/160x100/f1d1818e7d/anz.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 4 */}
          <img
            src="https://a.storyblok.com/f/116740/242x136/2681832898/nab-logo.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 5 */}
          <img
            src="https://a.storyblok.com/f/116740/160x100/01935ac0e7/omm.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 6 */}
          <img
            src="https://a.storyblok.com/f/116740/160x100/a0d9e53adc/liberty.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 7 */}
          <img
            src="https://a.storyblok.com/f/116740/160x100/f929e1dd54/jacaranda.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 8 */}
          <img
            src="https://a.storyblok.com/f/116740/191x85/b1a343ab18/now-finance-logo.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 9 */}
          <img
            src="https://a.storyblok.com/f/116740/160x100/c1f59c168a/financeone.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
          {/* Image 10 */}
          <img
            src="https://a.storyblok.com/f/116740/242x78/acc962da91/wisr-logo.png/m/filters:format(webp)"
            alt=""
            className="w-24 h-24 object-contain mx-auto"
          />
        </div>
      </div>

      {/* Leader Story Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 bg-[#FDE7F0] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-10">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center text-center md:text-left">
          <img
            src="https://www.loans.com.au/contentAsset/image/02c863118ee84d46a29c42496d7ca9ab/fileAsset/filter/Resize,WebP/resize_w/380/webp_q/85"
            alt="Marie Mortimer"
            className="w-full max-w-[300px] md:max-w-[350px] object-contain"
          />
          <h3 className="navbar font-semibold text-base sm:text-lg pt-3">
            Marie Mortimer
          </h3>
          <p className="font-normal text-sm sm:text-base">
            Managing Director of MoneyMe
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-xl">
          <h2 className="menu-link font-semibold text-2xl sm:text-3xl pt-4 sm:pt-2 leading-snug">
            Launched in 2011, MoneyMe, was <br className="hidden md:block" />{" "}
            Australia's first online lender
          </h2>
          <p className="font-normal text-sm sm:text-base leading-relaxed mt-4 px-4 md:px-0">
            MoneyMe was one of Australia's first online lenders allowing people
            to get a home loan online. We've since grown to become one of
            Australia's largest lenders with happy home and car loan customers
            all over Australia.
          </p>
        </div>
      </div>

      {/* What you can finance with a personal loan Section */}
      <div className="w-full min-h-screen mt-10 sm:mt-16 bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center text-center md:text-left max-w-4xl mb-10">
          <h3 className="special-gothic-expanded-one-regular font-semibold text-2xl sm:text-3xl md:text-4xl uppercase">
            What you can <br className="hidden md:block" /> finance with{" "}
            <br className="hidden md:block" /> a personal loan
          </h3>
          <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            You can choose between secured personal loans (requiring an asset)
            or unsecured loans (no asset required) for various needs. Here are
            some common reasons people apply for a personal loan:
          </p>
        </div>

        {/* Boxes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
          {/* Reusable Box Component */}
          {[
            {
              title: "Debt consolidation",
              img: "https://a.storyblok.com/f/116740/65x65/0a8ab5aba3/coins-stacked-1-svg.svg",
              desc: "Combining multiple debts into one simple, manageable loan to make your finances more straightforward",
            },
            {
              title: "Vehicle",
              img: "https://a.storyblok.com/f/116740/65x65/1a98d2ff52/car-01.svg",
              desc: "Buying a new or used car, motorcycle, ute, boat or caravan, with both secured and unsecured loan options available",
            },
            {
              title: "Home improvement",
              img: "https://a.storyblok.com/f/116740/65x65/163b4ac3dc/tool-02.svg",
              desc: "Funding DIY projects or major renovations and spread the cost over time",
            },
            {
              title: "Wedding",
              img: "https://a.storyblok.com/f/116740/65x64/5d60adb72c/users-plus.svg",
              desc: "Paying for a wedding when you need to cover venue and dress costs, but your finances are tight",
            },
            {
              title: "Medical",
              img: "https://a.storyblok.com/f/116740/65x65/ff4e397bd5/medical-circle.svg",
              desc: "Covering medical expenses, like surgery bills or major dental work, when care is needed",
            },
          ].map((box, idx) => (
            <div
              key={idx}
              className="w-full max-w-[300px] mx-auto bg-[#BCEE00] shadow-lg flex flex-col text-black p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="navbar font-semibold text-xl leading-snug">
                  {box.title}
                </h3>
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="font-normal text-sm sm:text-base leading-relaxed mt-2">
                {box.desc}
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-3xl mt-4 self-start mx-auto">
                Compare Rates
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose US Section */}
      <div className="w-full h-auto mt-10 sm:mt-16  px-4 sm:px-6 md:px-10 py-10">
        <h2 className="special-gothic-expanded-one-regular text-center text-black font-semibold text-2xl sm:text-3xl md:text-4xl">
          Why Choose Us ?
        </h2>
        {/* Boxes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-7xl mx-auto mt-5">
          {/* Reusable Box Component */}
          {[
            {
              img: "https://www.loans.com.au/dA/b217601ec9/award-winning.png",
              title: "Award Winning",
              des: "We keep on winning awards for our products, innovations and customer service, year after year!",
            },
            {
              img: "https://www.loans.com.au/dA/e197f886f2/flexible-option.png",
              title: "Flexible Options",
              des: "Looking to save with an offset, or make extra repayments with a redraw? We have a full range of loan features to suit your situation",
            },
            {
              img: "https://www.loans.com.au/dA/0fd9a932b3/australian-based.png",
              title: "Australian based",
              des: "Get help when you need it from our friendly team of Australian based, lending specialists.",
            },
            {
              img: "https://www.loans.com.au/dA/bfa6593e13/low-interest-rate.png",
              title: "Low Interest rates",
              des: "Being an online lender with fewer overheads means we’re able to pass on the savings to our customers.",
            },
          ].map((box, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={box.img}
                alt={box.title}
                className="w-24 h-24 object-contain"
              />
              <h3 className="font-semibold text-xl leading-snug mt-4 text-black">
                {box.title}
              </h3>
              <p className="font-normal text-centerc text-sm sm:text-base leading-relaxed mt-2 text-black">
                {box.des}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What Our Customers Say Section */}
      <div className="w-full h-auto bg-[#F5FCD9]  mt-10 sm:mt-16  px-4 sm:px-6 md:px-10 py-10">
        {/* Heading Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-6">
          <h2 className="special-gothic-expanded-one-regular text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-left">
            What our customers say
          </h2>
          <img
            src="https://www.moneyme.com.au/images/Masterpage/V4/hybrid-ratings.svg"
            alt="Customer Ratings"
            className="w-48 sm:w-60 md:w-72 lg:w-80 object-contain mt-4 sm:mt-0"
          />
        </div>

        {/* Slider Section */}
        <div className=" max-w-sm mx-auto mt-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg  text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg  text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full h-auto  bg-white shadow-lg  text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto bg-white shadow-lg text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg  text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg  text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto  bg-white shadow-lg  text-black p-4">
                <img
                  src="https://www.moneyme.com.au/images/Masterpage/V4/4-star-rating.svg"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
                <h3 className="font-semibold text-xl text-black leading-snug">
                  Best Service Ever!!!
                </h3>
                <p className="font-normal text-black text-sm sm:text-base leading-relaxed mt-2">
                  The team at MONEYME have been amazing to deal with. Super fast
                  and helpful service & I love how easy the app is to use. 10/10
                  from me.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-black  text-sm sm:text-base">
                    Sonya <br /> Nov 28, 2023
                  </p>
                  <img
                    src="https://www.moneyme.com.au/images/Masterpage/V4/pr-icon.svg"
                    className="w-12 h-12"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
