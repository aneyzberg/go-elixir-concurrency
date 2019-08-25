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
        <SimpleSlide inverted fit={false} statement="How do we build community">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>
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
          inverted
          quote="“ It’s rules all the way down. Coders care passionately about the position of their brackets and semicolons.
          User experience designers work to make things elegant and simple and accessible to all.
          They meet at conferences, on message boards, and today in private Slacks to hash out what is good and what is bad... - Paul Ford.“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <QuoteSlide
          inverted
          quote="“Which also means who is in, and who is out. - Paul Ford“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        <SimpleSlide inverted fit={false} statement="So who is the who?">
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

        <ImageSlide image="tech-leavers-new.jpg">
          <Notes>
            <p>2017 an oaklnad based non-profit called the Kapor Center did a study called the tech leavers study</p>
            <ul>
            <li> people are leaving the Industry</li>
            <li>we have all seen the news lately google manifesto, vs firms, uber</li>
            <li> tech indsutry not always welcome place </li>
          </ul>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Anyone familiar with the term Status Distance?">
          <Notes>
              <ul>
              <li>Paper publishd by faculty - columbia university gradaute school of business</li>
              <li>Katherine W. Phillips and Melissa C. Thomas-Hunt</li>
              <li>tooka look at status distance in groups</li>
              <li>We refer ro the difference in value assigned to members of a group as the level of status
                distance in the group</li>
              <li>and argue that the status distance between members
                often obscures the unique contributions that individuals are poised to make. </li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Status Distance === Bias?">
          <Notes>

          </Notes>
        </SimpleSlide>

        <ImageSlide image="fluency-heuristic.png">
          <Notes>
            <ul>
              <li>the more fluently, smoothly, or quickly we process something the more value we place on it</li>
              <li>this leads to bias</li>
              <li>often people who need to be heard are not</li>
              <li>HBR study of women wearing sensors</li>
              <li> gender differences in behavior drive gender differences in outcomes
                 at one of our client organizations, a large multinational firm, where women were underrepresented in upper management.</li>
            </ul>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Those who know the rules...who understand the etiquette...they have more power">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="With less power...keep leaving. Show twitter quote">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="so those of us that know the etiquetter/have the power...">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="We have a responsibility">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="And what do we do with that?">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <QuoteSlide
          inverted
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
          inverted
          quote="“If bitcoin can be real money, then fairness can be a real goal.“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>


        <SimpleSlide inverted fit={false} statement="What do we mean by fairness?">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Providing an environment for folks to enter and feel welcome and have the tools to effectively participate in the community">
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

        <SimpleSlide inverted fit={false} statement="But first...">
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


        <SimpleSlide inverted fit={false} statement="Helped Ruby community in SF go from 2% women to 18% women in 1 year(2009-2010)">
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
              <li> how it got started</li>
              <li>so far workshops in SF, NYC, SEAttle, but lots of interest in other places</li>
              <h2>Schedule</h2>
            <div style="text-align: left">Friday night: InstallFest</div>
            <div style="text-align: left"> Saturday: Workshop</div>
            <ul>
              <li style="padding-bottom: 0px;">9:30 - 10:00am: Sign in, coffee, breakfast</li>
              <li style="padding-bottom: 0px;">10:00 - 10:15am: Intro!</li>
              <li style="padding-bottom: 0px;">10:30 - 12:30pm: Session 1</li>
              <li style="padding-bottom: 0px;">12:30 - 1:30pm: Lunch!</li>
              <li style="padding-bottom: 0px;">1:30 - 4:00pm: Session 3</li>
              <li style="padding-bottom: 0px;">4:15 - 4:30pm: Retrospective</li>
              <li tyle="padding-bottom: 0px;">4:30 - 5pm: Happy Hour at TBD</li>
              </ul>
              <ul>
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

          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="But how?">
          <Notes>
          <ul>who are the first 10 people your shared elixir with</ul>
          <ul>does this group reflect the commuinity with want to see</ul>
          <ul>how else do we do this?</ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Creating a Safe Space">
          <Notes>
            <p>how do we help people to feel satisfied</p>

          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Code of Conduct">
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


        <SimpleSlide inverted fit={false} statement="Clear Examples of What is expected">
          <Notes>
            <ul>
              <li>Use your words and respect boundaries</li>
              <li> If you feel like it would help to work directly on someone’s keyboard, ask first.</li>
              <li>Refer participants to open and free material for follow-up learning.</li>
              <li> Do not ask anyone out on a date.</li>
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

        <SimpleSlide  fit={false} statement="What about when things go wrong?">
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
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Everyone has limited knowledge but infinite potential">
          <Notes>
              <ul>
                <li>key to lowering intimidation factor</li>
                <li>people able to really learn, don't have to worry about not knowing</li>
                <li>changes the tone of the environment</li>
              </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="We teach people to code because we believe that the people making technology should accurately reflect the diversity
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

        <SimpleSlide inverted fit={false} statement="Accessibility">
          <Notes>
          <ul>
              <li>Free</li>
              <li>Food</li>
              <li>Childcare</li>
              <li>Installfest</li>
              <li>Introductions</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Story about Dave and Joe">
          <Notes>
          <ul>
              <li>Free</li>
              <li>Food</li>
              <li>Childcare</li>
              <li>Installfest</li>
              <li>Introductions</li>
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

        <SimpleSlide inverted fit={false} statement="Community of practice">
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
              </ul>
          </Notes>
        </SimpleSlide>



        <ImageSlide image="railsbridge-workshop1.jpg">
          <Notes></Notes>

        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Ask Questions">
          <Notes>
          </Notes>
        </SimpleSlide>


        <ImageSlide inverted image="railsbridge-workshop1.jpg">
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

        <ImageSlide image="sleeping-puppy1.jpg">
          <Notes>
            <p>
              open source is hard
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Volunteer Run">
          <Notes>
            <p>
             we are really run by only a few people - workshops only happen if we make them happen
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Theoretically anyone can run a workshop?">
          <Notes>
            <p>
                The curriculum is open source and yet we need to have a lot of documentation in place to support folsk doing this
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Writing curriculum is hard">
          <Notes>
            <p>
              I have so much respect for anyone who writes things to help other people learn
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Maintaining it is even harder ">
          <Notes>
            <p>
              I have so much respect for anyone who writes things to help other people learn
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Maintaining it is even harder ">
          <Notes>
            <p>
              I have so much respect for anyone who writes things to help other people learn
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="You will need help">
          <Notes>
            <p>
             at some point you will need help from others. Setting up ways to allow others to be involved early
             will make thigns easier later. Even if it is more work up front.
             We did not do this
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Scaling is hard">
          <Notes>
            <p>
             at some point you will need help from others. Setting up ways to allow others to be involved early
             will make thigns easier later. Even if it is more work up front.
             We did not do this
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Burnout is real">
          <Notes>
            <p>
            </p>
          </Notes>
        </SimpleSlide>



        <SimpleSlide inverted fit={false} statement="Be wary of forever projects">
          <Notes>
            <p>
             We are continuing to do this work because we deeply believe in it. but I have yet to hear
             from folks about how to successfully hand off a forever project
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="Despite all this...">
          <Notes>
            <p>
             We are continuing to do this work because we deeply believe in it. but I have yet to hear
             from folks about how to successfully hand off a forever project
            </p>
          </Notes>
        </SimpleSlide>

        <DefinitionSlide
          inverted
          term="How do we implement channels in Elixir?"
        />


        <SimpleSlide statement="Conclusions">
        <Notes>
            <div>
              <p>
                We've seen how two different languages approached the problem of coordination as it relates to concurrency.
              </p>
              <p>
                Each languages approach was guided by the specific problems it was trying solve
              </p>
              <p>
                If you understand the problems each approach intends to solve, you can choose the right tool for the jobs
              </p>
              <p>
                Unfortunately, many factors go into choosing a language to build your software in, apart from concurrency, and sometimes
                the choice is made for you.
              </p>
              <p>
                One of the thoughts we want to leave you with is to not be limited by the paradigms
                of the language
              </p>
              <p>
                Often when working inside of a particular construct, our thought process
                can be confined to within the walls of that construct.
              </p>
              <p>
                If you understand the patterns and approaches of many languages, as you have seen -
                it is possible to adopt paradigms from other languages into your current context
              </p>
              <p>
                Although we recognize that it may feel awkward, depending on the problem you are trying to solve, it still might be the most elegant solution
              </p>
            </div>
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
          title="Thank you!"
          image="poohbear.jpg"
          text="http://concurrency.techgirlwonder.com"
        >
          <Notes>Need to replace this image</Notes>
        </ImageSlide>
      </Deck>
    )
  }
}
