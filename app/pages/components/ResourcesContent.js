import Link from 'next/link'
import GetConnected from './GetConnected'
import SmallBizContent from '../../page-content/BusinessResourcesContent'

const TextComponent = () => (
  <div className="mx-3 sm:mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1 className="text-2xl font-extrabold text-sbaBlue md:text-3xl">
      Available Small Business Grants & Relief
    </h1>
    <p className="mt-9 text-base text-black md:text-lg">
      As America continues its economic recovery, there are a variety of
      federal, state, and local opportunities to access small business grants
      and relief. Because these options change regularly, the best way to learn
      about options available to you is through an IRC CNPP business counselor.
      Contact us today to{' '}
      <Link href="/contact">
        <u className="cursor-pointer">get connected</u>
      </Link>
    </p>
    <h2 className="mt-9 text-xl font-bold text-black md:text-2xl">
      Small Business Relief Available through IRC's Center for Economic
      Opportunity (CEO)
    </h2>
    <p className="mt-9 text-base text-black md:text-lg">
      The International Rescue Committee's Center for Economic Opportunity (CEO)
      is a non-profit lender specializing in making small-dollar loans to
      refugees and immigrants. CEO is a certified by the U.S. Treasury as a
      national Community Development Financial Insitituion (CDFI) and currently
      has operations in 14 states. CEO does not charge any late fees and is
      flexible with modifying loans or deferring payments to help clients
      protect their credit and overcome financial turbulence. Some products and
      rates that are available CEO include:
      <ul className="indent my-2 list-disc pl-10">
        <li>Credit Building loans of up to $1,000 with 0% APR</li>
        <li>Business Recovery loans of up to $10,000 with 0% APR</li>
      </ul>
    </p>
    <p className="mt-3 text-base text-black md:text-lg">
      <Link href="/contact">
        <u className="cursor-pointer">Get Connected</u>
      </Link>{' '}
      with a business counselor today to learn more about how you can access
      available CEO loans.
    </p>
    <h2 className="mt-9 text-xl font-bold text-black md:text-2xl">
      Available Grants & Relief
    </h2>
<p><b>National Small Business Person of the Year</b>: Do you know the next National Small Business Person of the Year? The deadline for the National Small Business Week Awards nominations is <b>December 8, 2022, by 3:00 p.m. ET</b>.  Other award categories include Exporter of the Year, federal procurement awards, and more. Submit your nomination today. Learn more <u><a href="https://www.sba.gov/national-small-business-week/awards?utm_medium=email&utm_source=govdelivery">here</a></u>. </p>
<p> *** </p>
 <p><b>Dove InstaGrants</b>: After the success of last years grant program, DOVE has decided to launch the DOVE InstaGrants Program once again. The program was designed to support women-identifying entrepreneurs having easier access to capital. Three grant winners will each receive $10,000. To apply, women should share a 30-second business pitch over Instagram with the hashtags #DOVEInstaGrantsEntry and tag @DoveChocolate. Applicants can alternatively submit a video on the grant page website until <b>December 19</b>. <u><a href="https://dovechocolateinstagrants.com/">Website Application Link</a></u> | <u><a href="https://rescue.box.com/s/b3dyna6zftmpf9tgpapc3wa3t8p6w278">One-Pager Tips for Video Pitch</a></u></p>
<p>*** </p>
  <p><b>IFundWomen Johnnie Walker First Strides Grant Program</b>:They have come together once again to provide support to “trailblazing” women-owned businesses that continue to push boundaries and grow. The organizations hope that by providing capital and coaching, women entrepreneurs will have a greater chance of helping their businesses succeed. Ten recipients of the First Strides Grant will receive a $10,000 grant and one year of coaching services through IFundWomen. Eligibility includes must be in business for a least 2 years, generating a minimum of $25k in annual revenue, majority women-owned, cannot be an alcohol-beverage brand and must be 21 and older. The application is open until <b>December 31</b>, and unable to pull a full application sample due to type, you can scroll through questions. A 1-minute video is required. <u><a href="https://ifundwomen.typeform.com/to/lVTLzwKo?typeform-source=ifundwomen.com">Website Application Link</a></u> | <u><a href="https://rescue.box.com/s/lgwzc5dmeixh5yt9o23pno7ks9fjdmyn">FAQ</a></u></p>
  <p> *** </p>
<p><b>#StandWithStudios Grant Program</b>:The fitness industry was hit hard by the COVID-19 pandemic, forcing many studios to close either permanently or temporarily. Many are still seeking funding to rebuild. WellnessLiving is a cloud-based business management software with integrated payment solutions rooted in the fitness and wellness industry. In partnership with CENTRED, WellnessLiving will give 16 grants, and mentorship in marketing support, software, and business education to fitness studios in need. Applications are due <b>December 15</b>. <u><a href="https://standwithstudios.com/application/">Website Application Link</a></u> | <u><a href="https://rescue.box.com/s/92av5m4n2mk09c9rlec45b209emhoh8v">Application Sample</a></u> |  <u><a href="https://rescue.box.com/s/92av5m4n2mk09c9rlec45b209emhoh8v">FAQ</a></u></p>
<p> *** </p>
</div>
)
const gridComponent = (arr) => (
  <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
      {arr.map((feature) => (
        <div key={feature.name} className="pt-6">
          <Link href={feature.hyperlink}>
            <div className="flow-root rounded-lg bg-gray-200 px-6 pb-8 hover:ring hover:ring-sbaBlue">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-sbaGray p-3 shadow-lg">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
const ResourcesContent = () => (
  <>
    <div className="relative mb-10 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-14 md:pb-16 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-sbaBlue xl:inline">
                  {SmallBizContent.header.title}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {SmallBizContent.header.description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={SmallBizContent.header.image}
          alt={SmallBizContent.header.imageAlt}
        />
      </div>
    </div>
    <TextComponent />
    <div className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Learning Resources
        </h2>
        <p className="mx-auto mt-10 max-w-prose text-2xl text-gray-500 underline">
          Workshops &#38; Videos
        </p>
        {gridComponent(SmallBizContent.videos)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Downloadable Learning Resources
        </p>
        {gridComponent(SmallBizContent.downloads)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Translated Documents
        </p>
        {gridComponent(SmallBizContent.documents)}
      </div>
    </div>
    <GetConnected />
  </>
)

export default ResourcesContent
