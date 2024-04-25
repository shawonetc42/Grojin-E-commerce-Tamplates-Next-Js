import React from "react";

function Footer() {
  return (
    <div className="mt-2 bg-gray-100">
      {/* first part */}
      <div className="container mx-auto flex justify-center items-center px-2 py-2  max-md:px-5">
        <div className="flex gap-5 justify-between items-start w-full  max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tight text-gray-900">
              Join our newsletter for £10 offs
            </div>
            <div className="mt-4 text-sm tracking-tight leading-5 text-gray-500">
              Register now to get latest updates on promotions &<br />
              coupons.Don’t worry, we not spam!
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end items-center px-2 gap-5 pl-4 w-full bg-white rounded-lg shadow-sm">
              <div className="flex items-center gap-2 py-2 px-3  rounded-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd1beac143062579d3edb4c98c91955e720feb06be698d2a7347e9941bcbde1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                  className="w-5 h-5"
                  alt="Email icon"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-40 sm:w-60 md:w-80 lg:w-96 xl:w-96 h-10  border rounded-lg px-3 py-1 focus:outline-none"
                />
              </div>
              <button className="px-5 py-2 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-900 transition duration-300">
                SEND
              </button>
            </div>

            <div className="mt-3.5 text-xs tracking-tight leading-4 text-purple-800">
              By subscribing you agree to our{" "}
              <span className="font-medium text-purple-800">
                Terms & Conditions and Privacy & Cookies Policy.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd part */}
      <div className="container px-3 mx-auto flex gap-8 justify-between items-start py-4 pr-5 border-t border-gray-300 max-md:flex-wrap">
        {/* Help Section */}
        <div className="flex flex-col text-gray-900">
          <div className="text-sm font-semibold mb-6">Do You Need Help ?</div>
          <div className="text-sm mb-6">
            Autoseligen syr. Nek diarask fröbomba. Nör
            <br />
            antipol kynoda nynat. Pressa fåmoska.
          </div>
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/828935c6080c150f242bd2f0e795b92e3469d6a6848b666ebd52e8c62a471f33?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 self-start w-7 aspect-square"
              alt="Clock Icon"
            />
            <div className="flex flex-col">
              <div className="text-xs">Monday-Friday: 08am-9pm</div>
              <div className="text-xl font-bold">0 800 300-353</div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea765f93e5441da1052e097f9113652817715953b9406a2c56590017b36e4fd2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 self-start w-7 aspect-square"
              alt="Email Icon"
            />
            <div className="flex flex-col">
              <div className="text-xs">Need help with your order?</div>
              <div className="text-sm font-semibold">info@example.com</div>
            </div>
          </div>
        </div>

        {/* Make Money Section */}
        <div className="flex flex-col text-sm text-gray-600">
          <div className="text-sm font-semibold mb-4">Make Money with Us</div>
          <div className="mb-3">Sell on Grogin</div>
          <div className="mb-3">Sell Your Services on Grogin</div>
          <div className="mb-3">Sell on Grogin Business</div>
          <div className="mb-3">Sell Your Apps on Grogin</div>
          <div className="mb-3">Become an Affilate</div>
          <div className="mb-3">Advertise Your Products</div>
          <div className="mb-3">Sell-Publish with Us</div>
          <div className="mb-3">Become an Blowwe Vendor</div>
        </div>

        {/* Let Us Help You Section */}
        <div className="flex flex-col text-sm text-gray-600">
          <div className="text-sm font-semibold mb-4">Let Us Help You</div>
          <div className="mb-3">Accessibility Statement</div>
          <div className="mb-3">Your Orders</div>
          <div className="mb-3">Returns & Replacements</div>
          <div className="mb-3">Shipping Rates & Policies</div>
          <div className="mb-3">Refund and Returns Policy</div>
          <div className="mb-3">Privacy Policy</div>
          <div className="mb-3">Terms and Conditions</div>
          <div className="mb-3">Cookie Settings</div>
          <div className="mb-3">Help Center</div>
        </div>

        {/* Get to Know Us Section */}
        <div className="flex flex-col text-sm text-gray-600">
          <div className="text-sm font-semibold mb-4">Get to Know Us</div>
          <div className="mb-3">Careers for Grogin</div>
          <div className="mb-3">About Grogin</div>
          <div className="mb-3">Investor Relations</div>
          <div className="mb-3">Grogin Devices</div>
          <div className="mb-3">Customer reviews</div>
          <div className="mb-3">Social Responsibility</div>
          <div className="mb-3">Store Locations</div>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col">
          <div className="text-sm font-semibold mb-4">Download our app</div>
          <div className="flex gap-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0560f6f170c2fb8db7199fbd4be5a61122ad80fb6e8e3ccc2de994f8bc777f02?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 max-w-full aspect-[3.03] w-[120px]"
              alt="Download App"
            />
            <div className="flex flex-col">
              <div className="text-xs font-medium">Download App Get</div>
              <div className="text-xs font-medium">-10% Discount</div>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60904fa816ab7efd823aaf16b82abfe2e2704c178cd7508c105c83137a413dfa?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 max-w-full aspect-[3.03] w-[120px]"
              alt="Download App"
            />
            <div className="flex flex-col">
              <div className="text-xs font-medium">Download App Get</div>
              <div className="text-xs font-medium">-20% Discount</div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col">
          <div className="text-sm font-semibold mb-4">
            Follow us on social media:
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef2d9a1f40b8f5fb9b31d21d068407b29d8be6077426350cee5e4f7f755e440?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-9 aspect-square"
              alt="Social Media Icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e2e2fc83011addc77bf869fba5cc7c8cee88fd14e4c98022a9613d525b6d7a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-9 aspect-square"
              alt="Social Media Icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b92ec11a7e92b79c5379b71b44a893de693bfa3c76e23549e416a374020e6c2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-9 aspect-square"
              alt="Social Media Icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a800666543f178f34ef0c46c314d9455eb62399f64509b4d1ac0af8afbe265c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
              className="shrink-0 w-9 aspect-square"
              alt="Social Media Icon"
            />
          </div>
        </div>
      </div>
      {/* 3rd part */}
    </div>
  );
}

export default Footer;
