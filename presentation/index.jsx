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



        <ImageSlide image="tradeoffs.png">
          <Notes>
            <p> As with everything there are tradeoffs</p>
          </Notes>
        </ImageSlide>
        <ImageSlide image="go-vs-elixir.jpg">
          <Notes>
            <p>
              And when we are looking Go vs Elixir what we are really looking at
              today are the concurrency models of the the two.
            </p>

            <p>
              We are not really talking about one versus the other. In this case
              we are comparing.
            </p>

            <p>
              The actor model in Erlang(Elixir) vs Communicating Sequential
              Processes in Go.
            </p>

            <p>
              But before we talk about that - let's take a look at how we might
              define concurrency
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide image="homer-computer.gif">
          <Notes>
            <p>Where did this start?</p>
          </Notes>
        </ImageSlide>

        <ImageSlide image="single-threaded.png">
          <Notes>
            <p>
              In the beginning, computers did not have operating systems and
              were designed to execute a single program from beginning to end
            </p>
            <p>Each program had access to all of the machine’s resources.</p>
          </Notes>
        </ImageSlide>
        <ImageSlide image="multi-threaded.png">
          <Notes>
            <p>
              Over time, operating systems evolved to allow multiple programs to
              execute at once
            </p>
            <p>each within a process</p>
            <p>
              On a multiprocessor system, multiple processes can be executed in
              parallel
            </p>
          </Notes>
        </ImageSlide>

        <ImageSlide image="multi-tasking.png">
          <Notes>
            <p>So how is it that this is possible?</p>
          </Notes>
        </ImageSlide>

        <ImageSlide inverted image="welcome-yall.jpg">
          <Notes>
            <p>It's not. We fake it.</p>
            <p>
              While it is true that at a particular instant in time, only one
              process can actually be running on a computer with only one CPU.
            </p>

            <p>
              {' '}
              However, the executable code for several processes is loaded into
              memory, and the processor switches rapidly between several jobs,
              giving the illusion that several jobs are running at once.
            </p>
            <p>
              At the risk of oversimplifying, a process can be in one of three
              states
            </p>
            <p>
              Running: the CPU is actually executing statements of this process.
              At any given instant, only one process can be running.
            </p>
            <p>
              Ready: the process is loaded into memory and runnable, but is not
              actually running; the CPU is doing something else.
            </p>
            <p>
              Blocked: the process is not runnable because it is waiting for an
              event to occur. The usual event is that it is waiting for an I/O
              operation to complete,
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="But we also have ">
          <Notes />
        </SimpleSlide>

        <ImageSlide inverted image="threads.gif">
          <Notes />
        </ImageSlide>

        <ImageSlide inverted image="process-thread.jpg">
          <Notes>
            <p>thread subset of process</p>
            <p>threads of a process share the same memory</p>
            <p>
              It is termed as a ‘lightweight process’, since it is similar to a
              real process but executes within the context of a process and
              shares the same resources allotted to the process by the kernel.
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="So how is this relevant?">
          <Notes>
            <p>
              Well now we have these more robust machines we can do more things
              at once. How can we leverage our applications efficiently to do more things at
              once
            </p>
          </Notes>
        </SimpleSlide>

        <ImageSlide inverted image="concurrency-vs-parallelism.png">
          <Notes>
            <p>So I want to come back to how we define concurrency</p>
            <p> And think about the following example</p>
            <p>Let's say you have 5 people assembling 5 single bed</p>
            <p>
              You can imagine that the instructions look pretty straight forward
            </p>
            <p>Now imagine you had 5 people assembling a single bed</p>
            <p>
              {' '}
              What would those instructions look like the instructions to ensure
              that no one has to wait for anyone to finishe a step and we get a
              finished bed as a result
            </p>
            <p>I don't know about you, but to me this this feels a lot more complex</p>
          </Notes>
        </ImageSlide>

        <QuoteSlide
          inverted
          quote="“Concurrency is the composition of independently executing processes, while parallelism is the simultaneous execution of computations“"
        >
        <Notes>
          <div>
            <p>If we look at how we might define concurrency</p>
          </div>
        </Notes>
        </QuoteSlide>
        <SimpleSlide
          inverted
          fit={false}
          statement="Parallelism is about executing many things at once. It's focus is execution"
        >
          <Notes />
        </SimpleSlide>

        <SimpleSlide
          inverted
          fit={false}
          statement="Concurrency is about dealing with many things at once. It's focus is structure"
        >
          <Notes></Notes>
        </SimpleSlide>


        <SimpleSlide
          inverted
          fit={false}
          statement="This requires coordination"
        >
          <Notes>
            <div>
              <p>
                And as we know...
              </p>
            </div></Notes>
        </SimpleSlide>

        <SimpleSlide
          inverted
          fit={false}
          statement="Coordination introduces complexity..."
        >
          <Notes>Good lead off for Hannah to discuss coordination</Notes>
        </SimpleSlide>

        <SimpleSlide
          fit={false}
          statement="How do we coordinate between tasks working together?"
        >
          <Notes>
            So I'm going to shift gears and talk about coordination for a bit --
            how we organize work between multiple potentially paraellel tasks
            that are working together?
          </Notes>
        </SimpleSlide>
        <ImageSlide
          fit={false}
          inverted
          title="The Problem"
          image="double-keyboard.gif"
          text="Concurrency Without Coordination"
        >
          <Notes>
            <p>First of all let's talk about why we need to coordinate.</p>

            <p>
              Anna said that the goal of concurrency is keep our work unblocked
              -- moving fast, and potentially in parallel.
            </p>

            <p>
              But multiple things happening in parallel, doesn't neccesarily
              accomplish anything, as this somewhat infamous NCIS image shows
            </p>
          </Notes>
        </ImageSlide>
        <ListSlide
          ordered={false}
          inverted
          title="Threads coordinate by sharing data"
          list={[
            'Use same memory space',
            'Use mutation on shared state to communicate',
            'Use various locks to prevent overwriting each others work'
          ]}
        >
          <Notes>
            <p>
              So the simplest way to do this, and the way it's been done
              traditionally, is to use the fact that threads share the same
              memory space.
            </p>
            <p>
              So if we both have access to a common data structure we can use
              mutations to communicate the work we're doing
            </p>
            <p>
              We have to be careful cause we don't want to override each others
              work, so we'll need various locking mechanisms to serialize access
              to data structures -- some of the most common are called mutexs
              and semaphores
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          fit={false}
          inverted
          title="Threads"
          image="Rundmc.jpg"
          text="Old School Concurrency"
        >
          <Notes>
            Threads are the original basis for writing concurrent programs --
            because they're already built into the operating system, and
            communicating through sharing data is something you basically can
            get for free. Maybe you need a few locking mechanism, but they're
            generally really simple.
          </Notes>
        </ImageSlide>
        <SimpleSlide
          fit={false}
          inverted
          statement="Most widely used programming languages support threads."
        >
          <Notes>
            <p>
              And as a result, the vast majority of traditional programming
              languages support using threads, and provide the basic mechanisms
              for communicating with shared data
            </p>
          </Notes>
        </SimpleSlide>
        <ImageSlide
          fit={false}
          inverted
          title="Mo Threads"
          image="biggie.jpg"
          text="Mo Problems"
        >
          <Notes>
            <p>
              As a basic way to coordinate work, communicating with shared data
              through threads is really simple and easy. The problem is, it
              doesn't scale. What starts off simple gets unwielding once you've
              got a complex set of coordinate jobs
            </p>
          </Notes>
        </ImageSlide>
        <ListSlide
          inverted
          title="Challenges With Threads"
          list={[
            'Lots of shared mutable state',
            'Dead locks / unpredictabiity',
            'Expontential complexity to manage'
          ]}
        >
          <Notes>
            <p>
              And before you know it you've run smack into the classic problems
              with this approach
            </p>
            <p>
              First of all, the entire mechanism is dependent on shared, mutable
              state. And as functional programmers, we know this has all kinds
              of unpredictabiity
            </p>
            <p>
              Second, who writes first gets very unpredictable, and if you use
              locking mechanisms and you forget to unlock, you can freeze your
              program
            </p>
            <p>
              Fundamentally though these the complexity of managing shared state
              basically grows Expontentially as you add more threads and more
              state, rather than linearly
            </p>
            <p>
              And it's the problems with these approaches that lead to the
              models we're going to look at in Elixir and Go for solving
              concurrency issues
            </p>
          </Notes>
        </ListSlide>

        <SimpleSlide fit={false} statement="The Actor Model">
          <Notes>
            Let's talk about how Erlang(Elixir) deal with coordination
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Invented by Carl Hewitt 1973">
          <Notes>Fun Fact</Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Erlang created in 1986">
          <Notes>
            <p>
              Creators of Erlang were not aware of the actor model when they
              wrote erlang...which speaks to the promise of this design pattern
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide
          fit={false}
          statement="Conceptual model to deal with concurrent computation"
        />

        <SimpleSlide
          fit={false}
          statement="Defines some general rules for how the system’s
            components should behave and interact with each other"
        />

        <ImageSlide image="actor-model-mailbox.png">
          <Notes>
            <p>So this is an example of what it might look like</p>
            <p>What is going on here?</p>
            <p>
              Each of these Circles has a mailbox and this little box that says
              internal state
            </p>
            <p>
              Each of these units is an actor(and in Erlang/Elixir land is
              called a process)
            </p>
            <p>This processes are completely isolated from each other</p>
            <p>not OS processes</p>
            <p>they communciate by sending messages to each other</p>
            <p>
              They never share memory, which means they do not direcly share
              data
            </p>
            <p>
              And each of these processes maintains and internal state that
              cannot be accesses directly by another process
            </p>
          </Notes>
        </ImageSlide>

        <QuoteSlide
          inverted
          quote="One ant is no ant."
          cite="https://www.brianstorti.com/the-actor-model/"
        >
          <Notes />
        </QuoteSlide>

        <ImageSlide image="ant.gif">
          <Notes>
            <p>one ant cannot survive alone</p>
            <p>same idea for actors</p>
            <p>they come in systems</p>
            <p>in this model everything is an actor</p>
            <p>
              each actor has a unique address so that it can send and recive
              messages to other actors
            </p>
          </Notes>
        </ImageSlide>

        <ImageSlide image="sending-mail.gif" />

        <ImageSlide image="actor-model-mailbox.png">
          <Notes>
            <p>Taking a close look at the sending of messages</p>
            <p>we mentiomedd that each process has a unique addresss</p>
            <p>Messages are sent asynchorously and stored in the mailbox</p>
            <p>Actor recieves a message it can do one of 3 things</p>
            <p>create more actors</p>
            <p>send message to other actors</p>
            <p>
              designate what to do with the next message - or essentially update
              it's internal state which will be the staet used by the next
              message (essentially how actors mutate state
            </p>
          </Notes>
        </ImageSlide>

        <ListSlide
          inverted
          title="Proccesses"
          list={[
            'Are not OS processes',
            'Light weight',
            'Do not share memory',
            'Have a unique ID'
          ]}
        >
          <Notes />
        </ListSlide>

        <SimpleSlide
          fit={false}
          statement="The Actor Model is Physically based"
        ><Notes>
          <div>
            <p>The interesthing thing about the Actor model in Elixir/Erlang land is that it is physically based</p>
            <p>Well what do I mean by that?</p>
          </div>
          </Notes></SimpleSlide>

        <ImageSlide image="switches.jpg">
          <Notes>
            <p>who still has a landline?</p>
            <p>when was the last time a call was dropped on that line</p>
            <p>Built to model real world contraints of physical systems</p>
          </Notes>
        </ImageSlide>

        <ImageSlide image="telephone-lines.jpg">
          <Notes>
            <p>over long distances</p>
            <p>
              This necessitated the patterns and functionality made available in our
              Elixir/Erlang Ecosystem
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="Distributed Elixir">
          <Notes>
            <p>One of those pieces of functionality being distribution</p>
            <p> I want to qualify a bit because as with anything there are challenges at scale</p>
            <p>but it is still something we have easy acess to</p>
            <p>
              Each process has a unique ID - making it really easy to
              commmunicate whether it be to a process on the same machine or
              across the world
            </p>
            <p>so processes communicate direclty with other processes</p>
            <p>
              And given that a node can go down at any time - we would not want
              sending a message nor confiramtion of receiving a message to
              be blocking - hence the asynchronous nature of the message passing
            </p>
            <p>messages are also not time bound in any sense</p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Let it Crash">
          <Notes>
            <div>
              <p>
                We have all heard this phrase
              </p>
            </div>
          </Notes>
        </SimpleSlide>

        <ImageSlide inverted image="fault-tolerance.png">
          <Notes>
            <p>Erlang and Elixir allow for self healing systems</p>
            <p>Remember that we were thinkign of real world constraints of physical systems</p>

            <p>
              We have have specialized proecesses that monitor other
              processes
            </p>
            <p>
              back to coordination - if a part of our system breaks - we do not
              want to take down the whole system
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide inverted image="fault-tolerance-harry-potter.gif">
          <Notes>*</Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="The BEAM">
          <Notes>
            How does any of this run
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Preemptive scheduling">
          <Notes />
        </SimpleSlide>

        <ImageSlide inverted image="erlang-vm.jpg">
          <Notes>
            <p>
              Preemptive: A preemptive scheduler does context switching among
              running tasks and has the power to preempt (interrupt) tasks and
              resume them at a later time without the cooperation of the
              preempted task This is done based on some factors like their
              priority or reductions.
            </p>
            <p>
              The factor of selecting a process for execution is based on their
              priority level which is configurable per process and in each
              priority level processes are scheduled in a round robin fashion.
              On the other hand the factor of preempting a process from
              execution is based on a certain number of Reductions since the
              last time it was selected for execution, regardless of its
              priority level. The reduction is a counter per process that is
              normally incremented by one for each function call. It is used for
              preempting processes and context switching them when the counter
              of a process reaches the maximum number of reductions.
            </p>
          </Notes>
        </ImageSlide>

        <ListSlide
          inverted
          title="Elixir Priorities"
          list={['Scalable', 'Fault Tolerant (Telco Strong)', 'Fast']}
        >
          <Notes>
            <p>
              Elixir(Erlang) priorities help explain choices made in the
              language
            </p>
            <p>
              Elixir is designed to be easy to be scalable -- you can easily
              deal with increases in load on your system. All code runs in
              processes. Because each “process” does not take up a lot of
              processing power, hundreds of thousands of programs could be
              running at the same time potentially on different computers.
            </p>
            <p>
              When was the last time you dropped a phone call? -- Elixir(Erlang)
              introduces supervision which allows a process within your app to
              to crash without your whole app crashing
            </p>
            <p>
              Out of the box, erlang (and therefore Elixir) allows us to build
              applications to run in almost real time due to efficiency of the
              runtime.
            </p>
          </Notes>
        </ListSlide>

        <SimpleSlide statement="Go And CSP" />

        <DefinitionSlide
          inverted
          fit={false}
          term="CSP"
          definition="Communicating Sequential Processes"
        >
          <Notes>
            Go's concurrency model is based on something called CSP, or
            Communicating Sequential Processes, a system for describing
            coordinated work among independent processes first described by Tony
            Hoare in 1978
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          inverted
          title="Process"
          image="sprinter.jpg"
          description="Smallest unit of work"
        >
          <Notes>
            So in the context of CSP, a Process just referest to the smallest
            possible indepedent unit of work.
            <br />
            Essentially something that has a start and an end.
            <br />I like to imagine a sprinter -- someone who goes from a
            defined start to a defined finish. <br />
          </Notes>
        </ImageSlide>
        <SimpleSlide inverted statement="CSP Process != OS Process">
          <Notes>
            As within the actor model, a process refers to something pretty
            small, a unit of work. And most implementations of CSP implement
            their version of a process on top of the OS, rather than relying on
            the operating system itself
          </Notes>
        </SimpleSlide>
        <ImageSlide
          inverted
          title="Channels"
          image="relayrace.jpg"
          description="Passing the baton"
        >
          <Notes>
            So if you have sprinters, small processes, how do you coordinate
            them? <br />
            Well lets imagine a relay race. The next sprinter waits till they
            get the baton <br />
            So you have processes, the sprinters, and they communicate, but they
            do it sequentially -- as in the messages they pass back and forth
            are sequentional in the sense that every read and write to a message
            channel can block the process
          </Notes>
        </ImageSlide>
        <SimpleSlide
          inverted
          fit={false}
          statement="Processes know channels, not other processes"
        >
          <Notes>
            One important difference from the traditional relay race is
            processes only know about channels. <br />
            So you can imagine the sprinter hands off the baton, but they don't
            know who they're going to hand off to -- <br />
            they just wait to hand off to the first person who's there
          </Notes>
        </SimpleSlide>

        <DefinitionSlide
          inverted
          term="Choice"
          definition="Processes choose behavior by listening on multiple channels"
        >
          <Notes>
            <p>
              A key additional element is that a process can at a given point,
              listen to multiple channels, and behave differently depending on
              which channel produces a message.
            </p>
            <p>
              So imagine a runner waiting for a baton, but they'll take a gold
              baton from one runner or a silver from another, whoever shows
              first. If they both show at once they choose a baton and random.
              And depending on whether they get the gold baton or the silver
              baton they run in a different direction
            </p>
          </Notes>
        </DefinitionSlide>
        <SimpleSlide statement="Looking at CSP in GO">
          <Notes>
            So let's look at how CSP actually works in practice, using Go as a
            concrete implementation
          </Notes>
        </SimpleSlide>
        <CodeSlide
          bgColor={colors.quartenary}
          notes={
            <div>
              <p>
                So this is a go program, and don't worry if you haven't seen go
                before, just suspend your disbelief.
                <br />
                Our goal here is to launch two processes, <br />
                have one send a message to a channel, <br />
                have another read from the channel
                <br />
                and then have them both notify the parent process that they're
                done
              </p>
              <p>
                This is our read function -- it takes a channel to read a string
                from, and a channel to notify the parent it's done. <br />
                Note that in go channels are typed, and we use an empty "struct"
                when we don't need to really transmit data but just want to say
                something happened
              </p>
              <p>
                Here's our write function, which you can see just writes to a
                channel and then notifies the parent its done
              </p>
              <p>And here's our main function</p>
              <p>
                Go is pretty low level, so we actually need to initialize our
                channels by telling go to allocate them. Go is garbage collected
                so we don't need to clean then up
              </p>
              <p>
                Here we kick of our read and write in parallel. Go's equivalent
                of CSP processes are called go routines. I'm gonna refer to them
                as go routines moving forward. <br />
                In go, any function becomes a go routine simply by putting the
                work go in front of it. So here we kick off the read and the
                write in parallel, and we've put the read before the write just
                to prove they're happening in parallel
              </p>
              <p>
                They both kick off, and then we read from our "done" channel
                twice to wait for both to complete. We don't technically have to
                do this, but if we didn't there's no gaurantee the finish
                statement would happen last.
              </p>
            </div>
          }
          lang="go"
          code={require('raw-loader!../assets/basicchannels.go')}
          ranges={[
            { loc: [0, 5], title: 'Channels in go!' },
            { loc: [4, 9], note: 'A function that reads from a channel' },
            { loc: [10, 14], note: 'A function that writes to a channel' },
            { loc: [15, 24], note: 'Main function' },
            { loc: [16, 18], note: 'Create the channels' },
            {
              loc: [18, 20],
              note: 'Start read and write operations in parallel'
            },
            { loc: [20, 23], note: 'Wait for both to complete' }
          ]}
        />
        <SimpleSlide
          fit={false}
          inverted
          statement="Synchronous Channels = Coordination"
        >
          <Notes>
            Every read and write to a channel is synchronous. If you write to a
            channel, it will block until someone else reads. The result of this,
            as you start to see in the example, is you can use channels to
            produce fairly predictable behavior, if that's what you want
          </Notes>
        </SimpleSlide>
        <CodeSlide
          bgColor={colors.quartenary}
          notes={
            <div>
              <p>
                Let's look at Go's implementation of choice, and why we might
                want to use it. Our scenario here is we're waiting for two
                parallel blocking operations -- say reading user input and
                waiting for a network request to complete.
              </p>
              <p>
                So here we have two channels representing input coming back from
                the user or the network
              </p>
              <p>
                Since this is a demo, we're not really gonna read from the
                network or from the user. So we'll make mock versions that just
                wait a random among of time and then return a value we specify
              </p>
              <p>
                Here's the function to generate a "delayed response" function.
              </p>
              <p>
                And now we kick off two go routines, with simulated response
                that will appear eventually, but we don't know when
              </p>
              <p>
                So let's figure out how to handle these responses. Here is a
                select statement, Go's implementation of choice. It looks like a
                switch, but in this case it runs whichever statement can be
                satisfied first. So when we get user input or we get a network
                response, we can respond to it.
              </p>
            </div>
          }
          lang="go"
          code={require('raw-loader!../assets/selectexample/selectexample.go')}
          ranges={[
            { loc: [0, 5], title: 'Choice in Go with select!' },
            {
              loc: [9, 11],
              note: 'Channels for user input and network responses'
            },
            { loc: [12, 14], note: 'Mock functions' },
            { loc: [26, 33], note: 'FYI: Generate a delayed function' },
            {
              loc: [14, 16],
              note: 'Kick off operations in parallel'
            },
            {
              loc: [16, 24],
              note: 'Read from both channels as soon as they are ready'
            }
          ]}
        />
        <SimpleSlide statement="How go implements CSP" />
        <QuoteSlide
          inverted
          quote="A goroutine is a lightweight thread managed by the Go runtime."
          cite="Official Tour Of Go"
        >
          <Notes>
            <p>Let's dig into what go routines are specifically.</p>
            <p>
              The go docs define a goroutine as a 'lightweight thread managed by
              the Go runtime.'
            </p>
            <p>
              The first word I see here is "thread", which is interesting cause
              CSP usually talks about processes
            </p>
            <p>And that's not by mistake cause...</p>
          </Notes>
        </QuoteSlide>
        <ImageSlide
          inverted
          title="Goroutines Share Memory"
          image="britney.gif"
          text="*stares Britnely*"
        />
        <SimpleSlide inverted statement="But wait there's more..." />
        <ConceptSlide
          inverted
          fit={false}
          concept="Sync Package"
          description="All the thread sync primitives, in Go!"
        />
        <QuoteSlide
          inverted
          cite="Go Docs"
          quote="Do not communicate by sharing memory; instead, share memory by communicating."
        />
        <QuoteSlide
          inverted
          textSize="3rem"
          cite="Also Go Docs"
          quote="This approach can be taken too far. Reference counts may be best done by putting a mutex around an integer variable, for instance. But as a high-level approach, using channels to control access makes it easier to write clear, correct programs."
        />
        <ConceptSlide
          inverted
          concept="Other Go Fun Fact"
          description="Go Routines Are Scheduled Cooperatively!"
        >
          <Notes>
            One more fun fact about Go -- Go Routines have to explicitly or
            implicitly give up control in order for another go routine to get
            scheduled. It's not like erlang where the scheduler allocates work
            for a process and then forcibly takes away control automatically.
            This can lead to some confusing locking behavior in certain rare
            cases.
          </Notes>
        </ConceptSlide>
        <ImageSlide inverted title="WTF GO?" image="blinkingwhiteguy.gif">
          <Notes>
            All of this may be leading you to wonder what the heck is going on
            with Go. So before we get all judgey, let's look at a few other
            aspects of Go's implementation that might help us get a fuller
            picture of the rationale for Go's decisions
          </Notes>
        </ImageSlide>
        <SimpleSlide inverted statement="Go compiles to native code" />
        <SimpleSlide inverted statement="Go run-time is small (2MB)" />
        <SimpleSlide
          inverted
          statement="Go is (almost) a systems programming language"
        >
          <Notes>
            And this gets to the core design goal of Go. Go is designed to be a
            replacement in many cases for C. It is garbage collected, so you
            wouldn't neccesarily write your operating system in Go, but it's
            designed to cover most of the other applications you'd write a
            program in C with. But it's also flexible and easy enough to work
            with that you can write a web server with it.
          </Notes>
        </SimpleSlide>
        <ListSlide
          inverted
          title="Go Priorities"
          list={['Ease of adoption', 'Speed', 'Flexibility']}
        >
          <Notes>
            <p>
              Once you understand Go's priorities, you can figure out why a lot
              of decisions were made.
            </p>
            <p>
              Go is designed to be easy to adopt -- you can learn the basic
              syntax and concepts quickly. It's a pretty flexible language with
              not a ton of convention.
            </p>
            <p>
              It's small and fast -- go includes almost none of the higher level
              concurrency primitives that Erlang has -- Supervisors, GenServers,
              etc
            </p>
            <p>
              And as a result it's flexible and can be adapted to a wide variety
              of use cases, with the caveat that you might need to bring some
              extra libraries to the table if you need higher level conventions
            </p>
          </Notes>
        </ListSlide>
        <SimpleSlide statement="CSP vs Actor Model">
          <Notes>
            So now we're gonna look at these different concurrency models-- the
            Actor Model and CSP-- how they are similar and different and show
            you how you can bring some of the gaps between them.
          </Notes>
        </SimpleSlide>
        <ListSlide
          inverted
          title="CSP and Actor model Similarities"
          list={[
            "Abstract 'processes' managed by runtime",
            'Share data by communicating/message passing'
          ]}
        >
          <Notes>
            <p>
              First of all it needs to be said how much more similar these
              models are than they are different, at least when compared to
              traditional threaded programming.
            </p>

            <p>
              Both go and Elixir manage their own concurrent code -- they both
              have an abstract concept of an executing piece of code apart from
              the operating system, and this means you don't have to spend a lot
              of time thinking about scheduling those pieces of code to run. Or
              worry a whole lot about the memory implications of spinning up
              thousands of Elixir processes or Go Routines
            </p>
            <p>
              And moreover, while Go is certainly less rigid in it's
              implementation, both CSP and the Actor Model emphasize message
              passing -- sharing data by communicating -- as the basic primitive
              for synchronization. And honestly, in my humble opinion, message
              passing is just better.
            </p>
          </Notes>
        </ListSlide>
        <QuoteSlide
          inverted
          quote="Erlang's syntax derived from Prolog and was heavily influenced by smalltalk, CSP and the functional programming."
          cite="Joe Armstrong, Erlang Creator"
        >
          <Notes>
            And none of this is a coincidence. While the Actor Model is it's own
            theoretical concept, Joe Armstrong himself says that Erlang was
            heavily influenced by CSP
          </Notes>
        </QuoteSlide>
        <ConceptSlide
          inverted
          fit={false}
          concept="Difference #1"
          description="Process Identity"
        >
          <Notes>
            <p>But there are some differences</p>
            <p>
              The first key difference is identity. Actor Model processes have
              identities -- in Erlang you get a process id and you can refer to
              it directly
            </p>
            <p>
              CSP processes are largely anonymous. Once you create a go routine
              there's no direct way to refer to it
            </p>
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          inverted
          fit={false}
          concept="Difference #2"
          description="Direct communication vs channels"
        >
          <Notes>
            <p>
              Because CSP processes are anonymous, they don't communicate
              directly
            </p>
            <p>
              And this is the second big difference -- if I want to communicate
              with an actor process, I send it a message
            </p>
            <p>
              In CSP on the other hand I communicate with channels, and they get
              read by whatever process is listening
            </p>
            <p>So there's a layer of indirection</p>
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          inverted
          fit={false}
          concept="Difference #3"
          description="Asynchronous vs synchronous message passing"
        >
          <Notes>
            <p>
              Finally, CSP messages are synchronous-- they get read immediately.
              That's really different than the actor model where messages are
              completely asynchronous
            </p>
            <p>
              This really changes how you work with them, and it does mean CSP
              is less well suited to distributed systems -- you just can't have
              synchronous messages across a network.
            </p>
          </Notes>
        </ConceptSlide>
        <ImageSlide
          inverted
          title="No So Different After All?"
          image="tomato.jpg"
        >
          <Notes>But are these really substantive differences?</Notes>
        </ImageSlide>

        <ListSlide
          inverted
          ordered={false}
          title="How To Give CSP Process An Identity"
          list={[
            '1 CSP channel',
            '+ 1 CSP Process Reading From Channel',
            '= Channel Becomes De-facto Identity'
          ]}
        />
        <ListSlide
          inverted
          ordered={false}
          title="How To Pass CSP Messages Asynchronously"
          list={[
            'Message Queue Process',
            '+ Channel For Sending',
            '+ Channel For Receiving',
            '= Asynchronous Message Passing'
          ]}
        />

        <DefinitionSlide
          inverted
          term="Building An Unbounded Channel In Go"
          definition="https://medium.com/capital-one-tech/building-an-unbounded-channel-in-go-789e175cd2cd"
        />
        <CodeSlide
          bgColor={colors.quartenary}
          notes={
            <div>
              <p>
                Now I'm going to show you now a real pattern I use to simulate
                genservers in Go.
              </p>
              <p>
                We're gonna make a mock genserver that implements a counter we
                increment, decrement, and read the value of. To make our counter
                work, it'll have a message channel and some internal state.
                There's no direct mechanism to keep the internal state from
                being touched outside the counters's go-routine, so we use the
                low-tech version a.k.a. a comment to other programmers. It is at
                least private so you can't touch it from code outside this
                module
              </p>
              <p>
                We're going to want a channel of messages we can send to the
                GenServer. We're going to use a go construct called an interface
                to simulate multiple types of messages we might send the
                genserver. Basically, a message interface is any type that has a
                handle method.
              </p>
              <p>
                Here's a function to build a counter and start it off. You can
                think of this as our start_link Go doesn't have easy supervision
                mechanisms, but we still need a way to tell this process to shut
                down. So take a channel which can be used to kill the counter.
              </p>
              <p>
                Go offer's buffered channels, which provide a mechanism for
                semi-non-blocking use -- meaning our messages are asynchronous
                up to a point
              </p>
              <p>
                Here are the functions we use to build a nice client API for
                this genserver -- these are functions you can call that will
                send messages to the counter for processing
              </p>
              <p>
                This is one last client function to read the current counter
                function, and this one is interesting, cause it needs a
                response, like a GenServer call. So what we do is send a
                response channel in the message to the counter, on to which the
                counter can write the response. And then we wait and read the
                response from the channel in this function
              </p>
              <p>
                Here's the actual processing loop for the channel. You can see
                all it does is read messages and handle them, while also
                checking the done channel to see if we should shut down
              </p>
              <p>
                And here are our message handlers. Go is somewhat object
                oriented so we're using a kind of dynamic dispatch here.
                Basically, the message type implements it's own handle message,
                so based on the message typed we'll process it differently.
              </p>
            </div>
          }
          lang="go"
          code={require('raw-loader!../assets/genserver.go')}
          ranges={[
            { loc: [0, 5], title: 'A GenServer in Go!' },
            {
              loc: [6, 12],
              note: 'Defining a counter type'
            },
            {
              loc: [2, 5],
              note: 'Defining a message interface'
            },
            { loc: [13, 22], note: 'New function' },
            { loc: [16, 17], note: 'Buffered Channel ~= Asynchronous' },
            { loc: [19, 20], note: 'Fire up process' },
            { loc: [23, 34], note: 'Client Functions - Increment/Decrement' },
            { loc: [39, 44], note: 'Get current value command' },
            { loc: [45, 55], note: 'Run loop' },
            { loc: [56, 67], note: 'Message handlers' }
          ]}
        />

        <DefinitionSlide
          inverted
          term="How do we implement channels in Elixir?"
        />

        <CodeSlide
          bgColor={colors.quartenary}
          notes={<div />}
          lang="elixir"
          code={require('raw-loader!../assets/channels.ex')}
          ranges={[
            { loc: [0, 5], title: 'Channels in Elixir' },
            { loc: [0, 8], note: 'Defining a queue'},
            { loc: [9, 11], note: 'Adding to queue'},
            { loc: [11, 12], note: 'if queue unbuffered'},
            { loc: [12, 14], note: 'add item to queue and return'},
            { loc: [14, 16], note: 'if buffered - check length of queue'},
            { loc: [16, 17], note: 'if queue full- return existing'},
            { loc: [17, 19], note: 'otherwise add item to queue queue'},
            { loc: [23, 24], note: 'Taking items from queue'},
            { loc: [25, 27], note: 'check length of queue'},
            { loc: [26, 28], note: 'if empty return empty queue'},
            { loc: [29, 31], note: 'otherwise return value'},
            { loc: [36, 45], note: 'Create GenServer' },
            { loc: [46, 50], note: 'Initialize unbuffered channel' },
            { loc: [54, 55], note: 'or intialize buffered channel' },
            { loc: [58, 59], note: 'implement callback for pulling from queue' },
            { loc: [60, 62], note: 'if empty, block response to caller' },
            { loc: [63, 65], note: 'else return updated queue' },
            { loc: [68, 69], note: 'callback for adding to queue' },
            { loc: [70, 72], note: 'block if queue full' },
            { loc: [74, 76], note: 'return when queue updated' }
          ]}
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
