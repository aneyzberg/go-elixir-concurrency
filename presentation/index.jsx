// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle'

import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import AboutMeSlideAnna from './slideTemplates/about-me-slide-anna.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import colors from './slideTemplates/colors'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
preloader({})
// Import theme
import createTheme from 'spectacle/lib/themes/default'
import aboutMeSlideAnna from './slideTemplates/about-me-slide-anna.jsx'

// Require CSS
require('normalize.css')
// use colors in slideTemplates/colors.js to construct theme
const theme = createTheme(colors, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <AboutMeSlide>
          <Notes>
            <p>Anna: Hi Everyone!</p>
            <p>
              Anna: Before we get started we're gonna briefly introduce
              ourselves
            </p>
            <p>
              Anna: I'm Anna, I'm a developer at Carbon Five. That's my contact
              info there.
            </p>
          </Notes>
        </AboutMeSlide>

        <SimpleSlide fit={false} statement="The small things are the big things?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="The small things are the big things?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="How do we build community?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Where do we start?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Why are some tech communities great?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Why are others toxic?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Need to understand where we currently are">
          <Notes>
          <p> What is the current state of our community, and why are the people that are here here</p>
          </Notes>
        </SimpleSlide>

        <QuoteSlide
          inverted
          quote="“A feeling of fellowship with others, as a result of sharing common attitudes, interests, and goals.“"
        >
          <Notes>
            <div>
              <p>This is from a piece by paul ford that I read earlier this year - and this statement resonated with me</p>
            </div>
          </Notes>
        </QuoteSlide>
        <QuoteSlide
          inverted
          quote="“So much about building software - more than anyone wants to admit--is etiquette - Paul Ford - wired 5.14.19“"
        >
        <Notes>
          <div>
            <p>This is from a piece by paul ford that I read earlier this year - and this statement resonated with me</p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          quote="“ It’s rules all the way down. Coders care passionately about the position of their brackets and semicolons...- Paul Ford.“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          inverted
          quote="“They meet at conferences, on message boards, and today in private Slacks to hash out what is good and what is bad... - Paul Ford.“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          quote="“the customary code of polite behavior in society or among members of a particular profession or group.- Wikipedia“"
        >
        <Notes>
          <div>
            <p>Yet with ths</p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          inverted
          quote="“the customary code“"
        >
        <Notes>
          <div>
            <p>We are making up the rules</p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          quote="“Which also means who is in, and who is out. - Paul Ford“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <SimpleSlide fit={false} statement="And it doesn't just pertain to software..">
          <Notes>
            <p>
              nerd stuff.
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="And it doesn't just pertain to software..">
          <Notes>
            <p>
              Maybe Kapor study
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="And it doesn't just pertain to software..">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="In 1989 my family immigrated from Soviet Russia as political refugees ...">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              With very little money and very little English language - my parents - in their early 30s and me (a toddler)
              immigrated to San Francisco - with nothing more than the belief that life would be better than in Communist Russia

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              The learned the language - established themselves. assimilated. By all standards they acheived back then what the American dream meant to them

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              But they did not do it alone. We were able to immigrate because there was pressure from U.S and Israeli governments to let the Soviet Jews leave due to
              antisemitism
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              In the states they were greeted by an organized Jewish community that helped them find housing, work, school for me.
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              Short story long - they had support. The etiquette of how to do things was passed along to them by those that came before them
              paired with AMerican Jews - essentially instant friends to help learn this new life. Help explain the etiquette - the code of living in teh u.s.
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              What seemed like simple human interactions - made all the difference
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              Fast forward - About 6 years ago I was transitioning careers and entering the industry
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
                A friend suggested I check out an organization called RailsBridge. All he knew was that they did workshops for women.
                My first workshop was incredible. The instructor was so excited that the feeling radiated through the room.
                We all felt empowered. Confident that we could approach something that to many of us had seemed intimidating.
                With a very small amount of encouragement we felt empowered to do more.

                After the workshop we all went to dinner as a group. This provided an opportunity to connect with the Teachers and TAs outside of
                a workshop setting. Again a small gesture but a feeling of being accepted into the community rather than a feeling of othering.
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="">
          <Notes>
            <p>
              Early on I could not yet code but I felt so supported by this community after a sinlge positive experience that I wanted to give back.
              So I started organizing workshops. There was a workshop eing held that that needed an extra organizer last minute. I decided to go help. There I met
              someone who is now one of my most valued mentors. I was still trying ot figure out how to transition into the industry. This person was already
              incredibly accomplished in the industry. I asked at the workshop if they would be willing to grab a coffee sometime so I could ask them some questions about gettign into
              the industry. Not really knowing who I was they said yes. I still remember that coffee. While it may have been a small thing. The
              advice I had gotten at that first meeting was incredibly motivating and valuable. But even more valuable was their support. Their willingnes
              to explain how things worked, to how to get started was invaluable.

              An explaing of the etiquette

              What seemed like a small single coffee helped to propel my career

              The small human interactions end up being the big things
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="The small thing ended up being hugely invaluable">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="zooming back in from geopolitics to our industry">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>



        <SimpleSlide fit={false} statement="So in our context of community building...">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="So in our context of community building...">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Who feels Welcome?">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Who in this room has ever felt unwelcome in some space?">
          <Notes>
            <p>
              And if we think upon the industry as a whole...this is not an uncommon expereince folk folks that are underreresented
            </p>
          </Notes>
        </SimpleSlide>



        <ImageSlide image="tech-leavers-new.jpg">
          <Notes>
            <p>2017 an oaklnad based non-profit called the Kapor Center did a study called the tech leavers study</p>
            <ul>
            <li> people are leaving the Industry</li>
            <li>we have all seen the news lately google manifesto, vs firms, uber</li>
            <li> tech indsutry not always welcome place </li>
            <li>We pride ourselves on innovation or "disruption" as an industry - yet so many brilliant minds that have diverse perspective are leaving </li>
            <li>folks do not feel welcome</li>
          </ul>
          </Notes>
        </ImageSlide>

        <SimpleSlide fit={false} statement="Anyone familiar with the term Status Distance?">
          <Notes>
              <ul>
              <li>Paper publishd by faculty - columbia university gradaute school of business</li>
              <li>Katherine W. Phillips and Melissa C. Thomas-Hunt</li>
              <li>tooka look at status distance in groups</li>
              <li>We refer ro the difference in value assigned to members of a group as the level of status
                distance in the group</li>
              <li>They argue that status differences among team members can suppress the confidence or assertiveness of lower-status members as well as the exchange
                   and integration of their unique knowledge, perspectives, and information.</li>
              <li>and argue that the status distance between members
                often obscures the unique contributions that individuals are poised to make. </li>
            </ul>

          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Status Distance === Bias?">
          <Notes>

          </Notes>
        </SimpleSlide>

        <ImageSlide image="fluency-heuristic.png">
          <Notes>
            <ul>
              <li>the more fluently, smoothly, or quickly we process something the more value we place on it</li>
              <li>this leads to bias</li>
              <li>often people who need to be heard are not</li>
              <li>HBR study of women wearing sensors - and found that there was not difference in the way women/men
                were acting at a company
              </li>
              <li> gender differences in behavior drive gender differences in outcomes
                 at one of our client organizations, a large multinational firm, where women were underrepresented in upper management.</li>
            </ul>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Those who already have bias lean toward them">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Have a responsibility">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="To help others get access">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="There is one problem">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Humans are terrible at making decisions">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>





        <SimpleSlide inverted fit={false} statement="How do we help people feel welcome">
          <Notes>
            <p>
              Just the other day one of the women I follow on twitter said she is leaving the industry.
              For an industry that prides itself on progress and innovation, having people leave rather
              than figuring out how to make a space where they feel welcome and want to contribute is the exact
              opposite of that

            </p>
          </Notes>
        </SimpleSlide>

        <QuoteSlide
          quote="“Progress is the opening of doors and the leveling of opportunity...
           Progress is seeing calmly, accepting, and thinking of others. - Paul Ford“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          quote="“If bitcoin can be real money, then fairness can be a real goal.-Paul Ford“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <SimpleSlide inverted fit={false} statement="But how do we accomplish this?">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>




        <SimpleSlide fit={false} statement="Providing an environment for folks to enter">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>

          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="To feel welcome">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>

          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="To have the tools to effectively participate in the community">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>

          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="This brings us to ElixirBridge">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>


        <ImageSlide image="eb-mark-color.png">
          <Notes>
          </Notes>
        </ImageSlide>

        <SimpleSlide  fit={false} statement="But first...">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="railsbridge-boston-photo.jpg">
          <Notes>
          <ul>
                <li>ElixirBridge is modeled after railsbridge</li>
                <li>My start in RailsBridge</li>
                <li>Interested in Elixir</li>
                <li>My friend Matt came up to me and we talked about starting ElixirBridge</li>
              </ul>

              <ul>
              <li> Started by Sarah Allen &amp; Sarah Mei in 2009</li>
              <li> Free weekendlong workshops for women</li>
              <li>All volunteer run</li>
              <li>Helped Ruby community in SF go from 2% women to 18% women in 1 year(2009-2010)</li>
            </ul>
          </Notes>

        </ImageSlide>


        <SimpleSlide fit={false} statement="Helped Ruby community in SF go from 2% women to 18% women in 1 year(2009-2010)">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="So back to ElixirBridge">
          <Notes>
              <li> how it got started</li>
              <li>so far workshops in SF, NYC, SEAttle, but lots of interest in other places</li>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="elixirbridge-workshop.jpg">
          <Notes>
            <p> As with everything there are tradeoffs</p>
            <div>
              <ul>
              <li> how it got started</li>
              <li>so far workshops in SF, NYC, SEAttle, but lots of interest in other places</li>

                <li>retrospective allows us to make sure we are meeting the needs of our community</li>
                <li>Happy hour: Students and teachers can connect outside of a workshop setting</li>
                <li>Another avenue that allows us to help build the community</li>
              </ul>
             </div>
          </Notes>
        </ImageSlide>

        <ImageSlide image="elixirbridge-structure.png">
          <Notes>
          </Notes>
        </ImageSlide>

        <SimpleSlide
          inverted
          fit={false}
          statement="What has worked for us"
        >
          <Notes>
            <p>
              Return to this idea of welcoming folks
            </p>
          </Notes>
        </SimpleSlide>

        <ImageSlide inverted image="welcome-yall.jpg">
          <Notes>
            <p>creating a welcoming inclusive environment so folks want to come into the community</p>
            <ul>who are the first 10 people your shared elixir with</ul>
          <ul>does this group reflect the commuinity with want to see</ul>
          <ul>how else do we do this?</ul>

          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="But how?">
          <Notes>

          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Creating a Safe Space">
          <Notes>
            <p>how do we help people to feel satisfied</p>

          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Code of Conduct">
          <Notes>
            <ul>
              <li>Community reflective of the diversity in the general population.</li>
              <li>A harassment-free experience for everyone</li>
              <li>Everyone has something to contribute.</li>
              <li>Anyone is allowed to hold a workshop</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="It is not just enough to have one">
          <Notes>
            <ul>
              <li>Community reflective of the diversity in the general population.</li>
              <li>A harassment-free experience for everyone</li>
              <li>Everyone has something to contribute.</li>
              <li>Anyone is allowed to hold a workshop</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Clear Examples of What is expected">
          <Notes>
            <ul>
              <li>Use your words and respect boundaries</li>
              <li> If you feel like it would help to work directly on someone’s keyboard, ask first.</li>
              <li>Refer participants to open and free material for follow-up learning.</li>
              <li> Do not ask anyone out on a date.</li>
              <li>we want to make sure that </li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Grey Area">
          <Notes>
            <ul>
              <li>If you are not sure your behavior is appropriate. It probably isn't</li>
              <li>Each person you interact with gets to define what that line is </li>
              <li>Do not assume that your way of thinking is the norm</li>
              <li>Sometimes it’s not clear. Good conduct requires judgment. There is a gray area between warm and welcoming
              behavior and unacceptable.</li>
            <li>If you just met the other person for the first time, consider offering your contact info, instead of requesting
              theirs.</li>
              <li>A lot of these things sound basics. But they are important. People feel safe, they can get excited about
              learning and excited to come back></li>
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="We want to make sure everyone is working with the same rules">
          <Notes>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="garbagefire.jpg">
          <Notes>
          <ul>
              <li>What to do if you feel harrassed as a participant</li>
              <li>As an organizer how to responds to harrassment</li>
              <li>In into we explain students tell organizers</li>
                <li> ask them to documetn incident in writing</li>
                <li>If there is legitimate threat or danger police will be notified</li>
                <li>Outline how to respond if a student or volunteer complains of harrassment</li>
                <li>how people act at a workhop really sets the tone of the workshop and space, and in effect becomes reflective
                  of the organization's values</li>
            </ul>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Everyone has limited knowledge but infinite potential">
          <Notes>
              <ul>
                <li>key to lowering intimidation factor</li>
                <li>people able to really learn, don't have to worry about not knowing</li>
                <li>changes the tone of the environment</li>
                <li>what someone knows now has no bearing on what they will no in the future</li>
              </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="We teach people to code because we believe that...">
          <Notes>
              <ul>
                <li>we saw this is crucial to companies</li>
                <li>beneficial to community</li>
                <li> people with diverse background and new ideas help us innovate</li>
                <li>helps create more opportunities for community as a whole so we all benefit</li>
              </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="the people making technology should accurately reflect the diversity
              of those using it.">
          <Notes>
              <ul>
                <li>we saw this is crucial to companies</li>
                <li>beneficial to community</li>
                <li> people with diverse background and new ideas help us innovate</li>
                <li>helps create more opportunities for community as a whole so we all benefit</li>
              </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Dave and Joe">
          <Notes>
          <p>
            My talk at ElixirConf
          </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Accessibility">
          <Notes>
          <ul>
              <li>Free</li>
              <li>Food</li>
              <li>Childcare</li>
              <li>Installfest</li>
              <li>Introductions</li>
              <li>curriculum is open source</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Resources">
          <Notes>
            <ul>
              <li>Training teachers how to teach/how to ineract with students</li>
              <li>Training teachers in conflict-resolution</li>
                <li>Not all teachers are good software developers</li>
                <li>Dealing with a student being desctructive in class</li>
                <li>Goal of promoting a welcoming environment</li>
              </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Community of practice">
          <Notes>
            <ul>
                <li>(students and teachers are sharing information adn learning from each other</li>
                <li>we recreate the collaborative environment that is good software development</li>
                <li>Building software is about people who all have an in-depth understanding of a problem, and who can collaborate
                  and communicate effectively to bring something to life. what is going on in this shared context we all
                  have</li>
                <li> Volunteers learn just as much as students, teaching not only strengthens their foundations, but each indivudla
                  has somethingto share</li>
                <li> volunteers take these expereinces back to their workplaces </li>
                <li>peoplge get to experience what positive software development is like</li>
                <li>people can come back and do the next thing</li>>
              </ul>
          </Notes>
        </SimpleSlide>



        <ImageSlide image="railsbridge-workshop1.jpg">
          <Notes></Notes>
        </ImageSlide>

        <ImageSlide image="dont-know.jpg">
          <Notes>
            <ul>
              <li>train TAs to also ask questions</li>
            </ul>
          </Notes>

        </ImageSlide>


        <ImageSlide inverted image="elixirbridge-workshop.jpg">
          <Notes>
          <ul>
                <li>Culture of question asking, it's ok not to know.
                </li>
                <li>Allies of underrepresented folks realize that as well</li>
                <li>Culture of question asking and collaboration taken back to workplace</li>
                <li>If people can't ask, they can't learn. so we are not doing our job as teachers</li>
              </ul>
          </Notes>

        </ImageSlide>


        <SimpleSlide inverted fit={false} statement="This works">
          <Notes>
            <p>
              Over all the workshops we have had, we had have folks who were students come back as teachers
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Folks have told us they feel comfortable sharing and learning">
          <Notes>
            <p>
              Over all the workshops we have had, we had have folks who were students come back as teachers
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="But we haven't gotten everything right....">
          <Notes>
            <p>
              Over all the workshops we have had, we had have folks who were students come back as teachers
            </p>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="sleepingpuppy1.jpg">
          <Notes>
            <p>
              open source is hard
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide fit={false} statement="Volunteer Run">
          <Notes>
            <p>
             we are really run by only a few people - workshops only happen if we make them happen
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Theoretically anyone can run a workshop?">
          <Notes>
            <ul>
              <li>The curriculum is open source and yet we need to have a lot of documentation in place to support folsk doing this</li>
              <li>have a run book in place where folks no exactly what they need to do</li>
              <li>most people want in person contact of some kind. how do we support that</li>

            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Writing curriculum is hard">
          <Notes>
            <ul>
              <li>I have so much respect for anyone who writes things to help other people learn</li>
              <li>how do you write it - in a teachable only format..in follow yourself..both</li>
              <li>balance of teachign and giving folks exercises so they can work on their own</li>
              <li>providing ever increasing challenges so folks don't get bored</li>
              <li>trying to build something useful</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Maintaining it is even harder ">
          <Notes>
            <div>
              <ul> I have so much respect for anyone who writes things to help other people learn</ul>
              <ul>bug fixes, upgrading versions, using latest features</ul>
              <ul>adding new curricula</ul>

            </div>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="You will need help">
          <Notes>
            <div>
              <ul>
                <li>at some point you will need help from others. Setting up ways to allow others to be involved early
             will make thigns easier later. Even if it is more work up front. We did not do this</li>
             <li>setting up issues/run book</li>
             <li>evenig where folks come together to work on curriculum</li>
             <li>organizer traingings to help folks learn how to organize events</li>
             </ul>


            </div>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Scaling is hard">
          <Notes>
            <p>
             Having the right pieces in place, and havig people feel comfortable enough to do this on their own
             takes time
            </p>
            <ul>
              <li>breaking down pieces of work so other folk can access it</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="burnout1.jpg">
          <Notes>
            <p>
            Burnout is real
            </p>
          </Notes>
        </ImageSlide>



        <ImageSlide image="foreverproject.png">
          <Notes>
            <p>
            We are continuing to do this work because we deeply believe in it. but I have yet to hear
             from folks about how to successfully hand off a forever project
            </p>
          </Notes>
        </ImageSlide>


        <SimpleSlide inverted fit={false} statement="Despite all this...">
          <Notes>
            <p>
             We are continuing to do this work because we deeply that the diversity of the people building technology
             reflect that of those using it.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Conclusions">
        <Notes>
          <ul>
            <li>
              there are simple things you can do
            </li>
            <li>
              engage in conversation with folks here who you have not met. help them to feel welcome
            </li>
            <li>think of the last 10 people you shared your excitement about elixir with, what does that community look like</li>
            <li>who will you reach out to next</li>
            <li>sometimes all someone needs is to be invited</li>

          </ul>
          </Notes>

        </SimpleSlide>
        {/* <ConceptSlide
          inverted
          fit={false}
          concept="Lesson"
          description="Conclusions"
        >

        </ConceptSlide> */}
        <ImageSlide
          title=""
          image="thankyou.jpg"
          text="@aneyzb | anna@carbonfive.com"
        >
        </ImageSlide>
      </Deck>
    )
  }
}
