// Import React
import React from 'react'
// Import Spectacle Core tags
import { Deck, Notes } from 'spectacle'
// Import theme
import createTheme from 'spectacle/lib/themes/default'
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
import '../assets/prism-tomorrow-ally.css'
import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import colors from './slideTemplates/colors'
import ImageSlide from './slideTemplates/image-slide.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import notes from 'spectacle/lib/components/notes'



preloader({})

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


        <ImageSlide image="immigration.jpg">
          <Notes>
          <ul>
            <li>
             In 1989 my family immigrated from Soviet Russia as political refugees ...
              With very little money and very little English language - my parents - in their early 30s and me (a toddler)
              immigrated to San Francisco - with nothing more than the belief that life would be better than in Communist Russia
            </li>
            <li>jewis in russia</li>
            <li>dad medical school</li>
            <li>political pressure from the U.S. and Israel</li>
            <li>
              The american and israeli jewish communities put a lot of pressure on the Soviet government to let socvet jews leave
            </li>
          </ul>

          </Notes>
        </ImageSlide>


        <ImageSlide image="immigration_2.jpg">
          <Notes>
            <ul>
              <li>
                The american jewish community was very organizers - helped them find jobs/places to live
              </li>
              <li>
                Paired us with American Jews living in San Francisco to help answer our questions/provide support as we
                navigated liviing in a new country
              </li>

              <li>
              The learned the language - established themselves. assimilated. By all standards they acheived back then what the American dream meant to them
              But they did not do it alone. We were able to immigrate because there was pressure from U.S and Israeli governments to let the Soviet Jews leave due to
              antisemitism

              In the states they were greeted by an organized Jewish community that helped them find housing, work, school for me.

              </li>
            </ul>
          </Notes>
          </ImageSlide>




        <SimpleSlide fit={false} statement="Passed Down the code...">
          <Notes>
            <ul>
              <li>How to exist in a new society-</li>
            </ul>


          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide fit={false} statement="difference">
          <Notes>
            <p>
              Short story long - they had support. The etiquette of how to do things was passed along to them by those that came before them
              paired with AMerican Jews - essentially instant friends to help learn this new life. Help explain the etiquette - the code of living in teh u.s.
              It wasn't large sweeping chanes or initiatives that made the biggest difference. But the small day to day shows of support tha gave them access
              to understanding how to live in the U.S.

              Sucessfully navigate living in this new country with this new language.

            </p>
          </Notes>
        </SimpleSlide> */}

        {/* <ImageSlide image="difference.jpg">
          <Notes>
          <p>
              In 1989 my family immigrated from Soviet Russia as political refugees ...
              With very little money and very little English language - my parents - in their early 30s and me (a toddler)
              immigrated to San Francisco - with nothing more than the belief that life would be better than in Communist Russia
            </p>
          </Notes>
        </ImageSlide> */}

        <ImageSlide image="railsbridge-workshop1.jpg">
          <Notes>
            <ul>
              <li>
                fried told me about railsbridge
              </li>
              <li>no background in C.S./intimidated</li>
              <li>instructor excited and confident</li>
              <li>left me feeling confident</li>
              <li>dinner felt welcome and as though I had been given acces to this community</li>
            </ul>
          <p>
            Fast forward a few decades About 6 years ago I was transitioning careers and entering the industry
                A friend suggested I check out an organization called RailsBridge. All he knew was that they did workshops for women.
                My first workshop was incredible. The instructor was so excited that the feeling radiated through the room.
                We all felt empowered. Confident that we could approach something that to many of us had seemed intimidating.
                With a very small amount of encouragement we felt empowered to do more.

                After the workshop we all went to dinner as a group. This provided an opportunity to connect with the Teachers and TAs outside of
                a workshop setting. Again a small gesture but a feeling of being accepted into the community rather of feeling like you have been given access makes all the difference.
            </p>
          </Notes>
        </ImageSlide>


        <ImageSlide image="railsbridge-boston-photo.jpg">
          <Notes>
          <p>
              Early on I could not yet code but I felt so supported by this community after a sinlge positive experience that I wanted to give back.
              So I started organizing workshops. There was a workshop being held that that needed an extra organizer last minute. I decided to go help. There I met
              someone who is now one of my most valued mentors. I was still trying ot figure out how to transition into the industry. This person was already
              incredibly accomplished in the industry. I asked at the workshop if they would be willing to grab a coffee sometime so I could ask them some questions about gettign into
              the industry. Not really knowing who I was they said yes. I still remember that coffee. While it may have been a small thing. The
              advice I had gotten at that first meeting was incredibly motivating and valuable. But even more valuable was their support. Their willingnes
              to explain how things worked, to how to get started was invaluable.

              An explaing of the etiquette

              What seemed like a small single coffee helped to propel my career

              The small human interactions end up being the big things

              Now my immigration story is for me a more complex story than tranisitioning to tech
              But I realized that the things the American Jewish Community did to help build community with soviet Jews on a large scale in this country
              applied to the same work I was doing on a much smaller scale.
            </p>
          </Notes>
        </ImageSlide>


        <SimpleSlide fit={false} statement="I have been doing a lot of thinking...">
          <Notes>
            <ul>
              <li>so what is the point of all this</li>
              <li>how does the immigration thing tie into the my getting into tech thing</li>
              <li>whay does that matter</li>
              <li>many of you know that I do a lot of work around building community</li>
              <li>I recently gave a talk about how to build community </li>
              <li>the sucesses and failures of ElixirBridge</li>
              <li>the sucesses and failures of ElixirBridge</li>
            </ul>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="About how we build community">
          <Notes>
            <ul>
              <li>thinking about on my immigrant story which I'm sure has similarities and differences of with other immigrant stories</li>
              <li>those who have helped me get started</li>
              <li>immigrant story much more comples</li>
              <li>but the things that faciliated sucess were very similar</li>
              <li>and I think about on a much smaller scale the community work I have tried to do in this community</li>
              <li>I realized that there are many parallels between what made our immigration sucessful and what has worked on a much smaller scale with ElixirBridge</li>
              <li></li>
            </ul>
          </Notes>

        </SimpleSlide>

        <SimpleSlide fit={false} statement="And how that makeup of that community ">
          <Notes>
            <li>and how the makeup of the commuity really affects the how we build software</li>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="affects the software we build">
          <Notes>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="The small things....">
          <Notes>
            <ul>

            <li>the things you might not really notice that end up being the big things for someone else</li>
            <li>And how it's not just in the tech community that these principles apply</li>
            <li>the American jewish families that answered questions about where to best by groceries or how to go about opening a bank account</li>
            <li>The initial coffee with my mentor to whom the 1.5 may not have seemed consequential but to me was incredibly influential in charting my path forward</li>
            <li>The student who came up after an elixirbridge workshop and said Having someone who looks like me teach this workshop was incredibly empowering</li>
            <li> I think about my immigration story often when doing community work. </li>
            <li>beign promoted and have that taken back</li>
            <li>I think about things that probably seemed inconsequential to folks a the time - but made all the difference for us </li>
            <li> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</li>
           <li>the small eveyr day guidance and interactiosn were what helped my family to figure out how to live</li>
           <li>I've come to realize - that in building community - the small things</li>
           <li>the things individuals can do everyday that makes the difference over time</li>
           </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Are the big things?">
          <Notes>
            <ul>
              <li>
                that build upon each other
              </li>
            </ul>

          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide fit={false} statement="">
          <Notes>

            <p></p>
            <p>that really are the pillars of how we build community</p>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          <p>the small eveyr day guidance and interactiosn were what helped my family to figure out how to live</p>
          <p>and this ultimately affects the software that we build</p>
          <p>the every day interactions between humans have large effects in either a positive and negative way</p>
          <p>those few coffees with my now mentor - changed the course of my career</p>
          <p>the small things that are often the hardest to quanitfy are some of the most important.</p>
          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide fit={false} statement="What do I mean by that?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide fit={false} statement="What do I mean by that?">
          <Notes>
          <p> So the motivation for this talk came from my experience building ElixirBridge the past few years - but that is not where I want to begin</p>
          </Notes>
        </SimpleSlide> */}




        <QuoteSlide

          quote="“So much about building software - more than anyone wants to admit--is etiquette - Paul Ford - wired 5.14.19“"
        >
        <Notes>
          <div>
            <p>This is from a piece by paul ford that I read earlier this year - and this statement resonated with me</p>
          </div>
        </Notes>
        </QuoteSlide>




        {/* <SimpleSlide fit={false} statement="How do we build community?">
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
        </QuoteSlide> */}


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
          quote="“Which also means who is in, and who is out. - Paul Ford“"
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
          quote="Sucess depends on understanding these somewhat arbitraty rules"
        >
        <Notes>
          <div>
            <p>Because the industry is still overlorded by people like me, who were lucky enough to have learned the etiquette early, to even know there was an etiquette. </p>
            <p>essentially rules that we decide on</p>
          </div>
        </Notes>
        </QuoteSlide>

        <ImageSlide image="time.jpg">
          <Notes>
            <ul>
              <li>
                We spend so much time thinking about the small things with regards to code
              </li>
              <li>
                What if we paid just as much attention thinking about the small things with regards people?
              </li>
              </ul>
          </Notes>
        </ImageSlide>

        {/* <ImageSlide image="small-things.png"> */}
          {/* <Notes>
            <p>
              some of use happen to be at the right place at the right time.
            </p>

          </Notes>
        </ImageSlide> */}


        <SimpleSlide fit={false} statement="So how do we do pass this etiquette on?">
          <Notes>
            <p>
              how do we as indivdiuals effectively do the small things day to day that build the commmunity we wish to see
            </p>
            <p>this time I am not thinking about building community from the scope of an organization - but how do we as individuals do better to pass this etiquette on</p>
            <p>how do we more consciously make a decision to do this</p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Take a step back">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="How human beings make decisions">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide>


        <ImageSlide image="thinking-1.jpg">
          <Notes>
          <p>
              The small human interactions end up being the big things
            </p>
          </Notes>
        </ImageSlide>

        <ImageSlide image="thinking-2.jpg">
          <Notes>
          <ul>
            <li>
              Prof Daniel Kahneman, from Princeton University, started a revolution in our understanding of the human mind.
              that we actually have two systems of thinking.
            </li>
            <li> there is a battle in your mind - a battle between intuition and logic.</li>
            <li>There's the deliberate,
            logical part of your mind that is capable of analysing a problem and coming up with a rational answer.</li>
            <li>This is the part of your mind that you are aware of. It's expert at solving problems, but it is slow, requires a great deal of energy, and is extremely lazy.
             Even the act of walking is enough to occupy most of your attentive mind.</li>
             <li> If you are asked to solve a tricky problem while walking, you will most likely stop because your attentive mind cannot attend to
             both tasks at the same time.</li>
             <li>Dad aand hiking</li>
             <li> Iis intuitive, fast and automatic. This fast way of thinking is incredibly powerful, but totally hi
            It is so powerful, it is actually responsible for most of the things that you say, do, think and believe.</li>
            </ul>
          </Notes>
        </ImageSlide>


        {/* <SimpleSlide fit={false} statement="Your mind has two systems">
          <Notes>

          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide fit={false} statement="That part you are aware of">
          <Notes>
            <p>
            There's the deliberate,
            logical part of your mind that is capable of analysing a problem and coming up with a rational answer.
            This is the part of your mind that you are aware of. It's expert at solving problems, but it is slow, requires a great deal of energy, and is extremely lazy.
             Even the act of walking is enough to occupy most of your attentive mind.

             If you are asked to solve a tricky problem while walking, you will most likely stop because your attentive mind cannot attend to both tasks at the same time.
            </p>
          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide fit={false} statement="The intuitive part">
          <Notes>
            <p>
            Iis intuitive, fast and automatic. This fast way of thinking is incredibly powerful, but totally hi
            It is so powerful, it is actually responsible for most of the things that you say, do, think and believe.
            </p>
          </Notes>
        </SimpleSlide> */}


        <ImageSlide image="instinct.png">
          <Notes>
          <p>
          <p>
            Most of the time, our fast, intuitive mind is in control, efficiently taking charge of all the thousands of decisions we make each day.
            </p>
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide fit={false} statement="The intuitve part is in control">
          <Notes>

          </Notes>
        </SimpleSlide>

        <ImageSlide image="decision.jpg">
          <Notes>

            <ul>
              <li>Most of the time, our fast, intuitive mind is in control, efficiently taking charge of all the thousands of decisions we make each day.</li>
              <li>study in nature magazine that had people look at a streaming screen of letters and choose a letter by either pressing the right or left controls.
              They would see letters streaming adn then press teh buttong whenever they felt like it. And were asked to remember which letter was on teh screen after
              they had pressed it. Then pressed a button to confirm which letter was on the screen.
              After doing this a single time - there would be a period of break and then letters would start streaming Again
              </li>
              <li>
              Consistently ares of the brain would light up that predicted when a person was going to press a button 7 to 10 s before they actually were aware adn pressing it.
              They were doing this while scans of their brain were being taken

              researchers could predict what choice people would make 7-10 seconds before they themselves were even aware of having made a decision. This means that even when people think they are making a conscious, logical, decision,
              chances are that they aren’t aware that they’ve already made a decision and that it was unconscious. We aren’t even aware of our own process.
              </li>
            </ul>



          </Notes>
        </ImageSlide>

        <ImageSlide image="decision_made.png">
          <Notes>
          <p>

          By the time we realize we have made a decision our brain has long since made it
          that the outcome of a decision can be encoded in brain activity of prefrontal and parietal cortex up to 10 s before it enters awareness. This delay presumably reflects the
            operation of a network of high-level control areas that begin to prepare an upcoming decision long before it enters awareness

            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="The problem begins">
          <Notes>
            <p>
            he problem comes when we allow our fast, intuitive system to make decisions that we really should pass over to our slow, logical system. This is where the mistakes creep in.
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="The way our minds work springs from the mistakes that we make.">
          <Notes>
            <ul>
              <li>
                Not random mistakes, but systematic errors that we all make, all the time, without realising.
              </li>
            </ul>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="cognitive_bias.jpg">
          <Notes>
          <p>
            Our thinking is riddled with systematic mistakes known to psychologists as cognitive biases. And they affect everything we do. They make us spend impulsively, be overly influenced by what other people think.
            They affect our beliefs, our opinions, and our decisions, and we have no idea it is happening.
            </p>
          </Notes>
        </ImageSlide>

        <ImageSlide image="present_bias.jpg">
          <Notes>
          <p>
            The "present bias" causes us to pay attention to what is happening now, but not to worry about the future. If I offer you half a box of chocolates in a year's time, or a whole box in a year and a day,
            you'll probably choose to wait the extra day.

            But if I offer you half a box of chocolates right now, or a whole box of chocolates tomorrow, you will most likely take half a box of chocolates now. It's the same difference, but waiting an extra day in a year's time seems insignificant.
            Waiting a day now seems impossible when faced with the immediate promise of chocolate
            </p>
          </Notes>
        </ImageSlide>


        <ImageSlide image="confirmation_bias.jpg">
          <Notes>
          <p>
            Anyone who has family members that spend lots of time on social media and
            that have political views they disagree with can probably attest to This

            Confirmation bias is the tendency to look for information that confirms what we already know.
            </p>
          </Notes>
        </ImageSlide>

        <SimpleSlide fit={false} statement="Respond differently to losses than gains">
          <Notes>
            <p>
            Kahneman realised that we respond very differently to losses than to gains. We feel the pain of a loss much more than we feel the pleasure of a gain. He even worked out by how much. If you lose £10 today, you will feel the pain of the loss.
            But if you find some money tomorrow, you will have to find more than £20 to make up for the loss of £10.
            This is loss aversion, and its cumulative effect can be catastrophic.
            </p>

            <p>Negative experiences way more heavily in individuals than positive ones</p>
          </Notes>
        </SimpleSlide>



        <SimpleSlide fit={false} statement="These biases are deeply rooted">

        </SimpleSlide>

        <ImageSlide image="monkeys.jpg">
          <Notes>
            <ul>
              <li>Dr Laurie Santos, a psychologist at Yale University, has been investigating how deep seated these biases really are. Until we know the evolutionary origins of these two systems of thinking, we won't know if we can change them.
              <li> Dr Santos taught a troop of monkeys to use money. It's called monkeynomics, and she wanted to find out whether monkeys would make the same stupid mistakes as humans. She taught the monkeys to use tokens to buy treats, and found that monkeys also show loss aversion -
              making the same mistakes as humans.</li>

            <li></li>Her conclusion is that these biases are so deep rooted in our evolutionary past, they may be impossible to change.</li>
            </ul>
            <p>


            </p>
          </Notes>
        </ImageSlide>


        {/* <SimpleSlide fit={false} statement="While we don't like to think about not being in control of our decision making">
          <Notes>
            <p>
              study in nature magazine that tested
              researchers could predict what choice people would make 7-10 seconds before they themselves were even aware of having made a decision. This means that even when people think they are making a conscious, logical, decision,
              chances are that they aren’t aware that they’ve already made a decision and that it was unconscious. We aren’t even aware of our own process.
            </p>
          </Notes>
        </SimpleSlide> */}



        <SimpleSlide fit={false} statement="People feel empowered to make decisions when they feel confident">
          <Notes>
            <ul>
              <li>another study in journal of physiology - Confidence-Related Decision Making </li>
              <li>There is actually a neuron that fires up in the brain that triggers people to take action when the brain decides it is confident of a decision. This is subjective.</li>
              <li>It’s not necessarily based on the amount of information you’ve collected — it’s a feeling of confidence.</li>
            </ul>
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
              <li>term in psychology</li>
              <li>the more fluently, smoothly, or quickly we process something the more value we place on it</li>
              <li>this leads to bias</li>
              <li>often people who need to be heard are not</li>
              <li>HBR study of women wearing sensors - and found that there was not difference in the way women/men
                were acting at a company
              </li>
              <li> gender differences in behavior drive gender differences in outcomes
                 at one of our client organizations, a large multinational firm, where women were underrepresented in upper management.</li>
                 <li>there were now differences in behavior</li>
                 <li>gender differences may lie not in how women act but in how people perceive their actions.</li>
                 <li>the intutive part of our brain</li>
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
              These are the folks that already feel confident and empowered to make decisions.
            </p>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="And as we just learned">
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

        {/* <SimpleSlide inverted fit={false} statement="Disruption">
          <Notes>
            <p>
              our indusrty likes to think of pushing thimngs forward - of continually making progress.
              what if we defined progress as?
              We often see see disruption as taking about large sweeping changes
            </p>
          </Notes>
        </SimpleSlide> */}

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

        {/* <SimpleSlide inverted fit={false} statement="It goes back to the small things the small things">
          <Notes>
            <p>
              Just the other day one of the women I follow on twitter said she is leaving the industry.
              For an industry that prides itself on progress and innovation, having people leave rather
              than figuring out how to make a space where they feel welcome and want to contribute is the exact
              opposite of that
            </p>
          </Notes>
        </SimpleSlide> */}




        <QuoteSlide
          quote="“If bitcoin can be real money, then fairness can be a real goal.-Paul Ford“"
        >
        <Notes>
          <div>
            <p>He continues to say the following </p>
          </div>
        </Notes>
        </QuoteSlide>

        {/* <SimpleSlide inverted fit={false} statement="We claim as an industry to continually be making progress..But how do we actually accomplish this?">
          <Notes>
            <p>

            </p>
          </Notes>
        </SimpleSlide> */}


        {/* <SimpleSlide inverted fit={false} statement="Language matters">
          <Notes>
            <p>
              nerd talk example - language matters
            </p>
          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide inverted fit={false} statement="small things are the big things">
          <Notes>
            <p>
              accidentally promoted example - being willing to have conversations that may be uncomfortable for yo
              but comofrtable for othres
            </p>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="eb-mark-color.png">
          <Notes>
            spent a lot of my time trying to help build community with ElixirBridge. And I don't have all the answers
            but I wanted to share some of the things we have learend that I think are applicable to building any type of community.
          </Notes>
        </ImageSlide>

        <SimpleSlide inverted fit={false} statement="What are things we can actively do">
          <Notes>
            <p>
              nerd talk example
            </p>
          </Notes>
        </SimpleSlide> */}

        <SimpleSlide fit={false} statement="Providing an environment for folks to enter">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>
            <ul>what does your work community look like</ul>
            <ul>the simple task of inviting people in</ul>


          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide fit={false} statement="To feel welcome">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>

          </Notes>
        </SimpleSlide> */}

        <SimpleSlide fit={false} statement="Feeling welcome helps people feel confident">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>
            <ul>when folks feel confident they feel like they can actively engage in the community</ul>

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
              <li>in rour offices creating a code of conduct</li>
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
              <li>Do employees at your company have to read and sign that they agree to the code of conduct</li>
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
                <li>shifting mindset to believe everyone has limited knowledge but infinite potential</li>
                <li>refect back on stauts distance and fluency hierarcy</li>
                <li>key to lowering intimidation factor</li>
                <li>people able to really learn, don't have to worry about not knowing</li>
                <li>changes the tone of the environment</li>
                <li>what someone knows now has no bearing on what they will no in the future</li>
                <li>what if every meeting you walked into you actually took teh time to think about this
                  and allow every decsison to have equal wait
                </li>
                <li>junior person on teh plane saves the plane</li>
              </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Provide access to effectively participate in the community">
          <Notes>
            <p>
              Providing an environment for folks to enter and feel welcome
            </p>
            <div> Check our own biases</div>
            <ul>who are the first 10 people your shared elixir with</ul>
            <ul>does this group reflect the commuinity with want to see</ul>
            <p>this doesn't just mean open source communities but also work comunit</p>
            <p>Senrior folks - often when you are on a project it is easy to see a problem and just take care of it</p>
            <p>What if you created an opportunity</p>
            <p>for more junior folks to solve that problem. </p>
            <p>provide opportunity for someone to build more confidence </p>
            <p></p>

          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Dave and Joe">
          <Notes>
          <p>
            My talk at ElixirConf
          </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Accessibility">
          <Notes>
          <ul>
              <li>Free</li>
              <li>Food</li>
              <li>Childcare</li>
              <li>Installfest</li>
              <li>Introductions</li>
              <li>curriculum is open source</li>
              <li></li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Access to opportunity ">
          <Notes>
          <ul>
              <li>Senior people on teams creating opportunity for more junior people on teams</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="Language matters">
          <Notes>
          <ul>
              <li>nerd talk</li>
              <li>train TAs to also ask questions</li>
              <li>modelig this behavior at work - small things = big things</li>
              <li>Senior people on teams creating opportunity for more junior people on teams</li>
            </ul>
          </Notes>
        </SimpleSlide>

        {/* <ImageSlide image="Language matters">
          <Notes>
            <ul>
              <li>train TAs to also ask questions</li>
              <li>modelig this behavior at work - small things = big things</li>
            </ul>
          </Notes>
        </ImageSlide> */}
        <ImageSlide image="dont-know.jpg">
          <Notes>
            <ul>
              <li>train TAs to also ask questions</li>
              <li>modelig this behavior at work - small things = big things</li>
              <li>p</li>
            </ul>
          </Notes>
        </ImageSlide>

        {/* <ImageSlide inverted image="elixirbridge-workshop.jpg">
          <Notes>
          <ul>
                <li>Culture of question asking, it's ok not to know.
                </li>
                <li>Allies of underrepresented folks realize that as well</li>
                <li>Culture of question asking and collaboration taken back to workplace</li>
                <li>If people can't ask, they can't learn. so we are not doing our job as teachers</li>
              </ul>
          </Notes>
        </ImageSlide> */}

        <SimpleSlide statement="Opportunity to reflect">
          <Notes>
            <ul>
              <li>train TAs to also ask questions</li>
              <li>modelig this behavior at work - small things = big things</li>
              <li>how is it actually going</li>
              <li>and addressing this </li>
              <li>faciliate spaces for honest reflection</li>
              <li>place to not let the small interactions that erode trust build into the problems that prevent a team from delivering</li>
            </ul>
          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide fit={false} statement="We teach people to code because we believe that...">
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
        </SimpleSlide> */}


        <SimpleSlide inverted fit={false} statement="This stuff is not easy">
          <Notes>
          <ul>
              <li>it's not enough to do it once</li>
              <li>I am not claiming to have all teh anwers</li>
              <li>there is no one answer</li>
              <li>and it takes conscious effor to do some if these things</li>
            </ul>
          </Notes>
        </SimpleSlide>

{/*
        <SimpleSlide inverted fit={false} statement="This stuff is not easy">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide inverted fit={false} statement="But as we know - the the only way big changes happen">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="By making many little changes over time">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide> */}

        <SimpleSlide  fit={false} statement="And is bigger than just building community that we want to see">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="Our code is biased">
          <Notes>
          <ul>
              <li>whether we like to admit it</li>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide  fit={false} statement="we know that our code grows in complexity">
          <Notes>
          <ul>
            <li>As technology develops - </li>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
              <li>it is impossible often for one human to understand all of the implications of the decsions
        we are making when we write code</li>
        <li>it is impossible often for one human to understand all of the implications of the decsions
        we are making when we write code</li>
        <li>and it is often impossible to understand beforehand the far reaching implications of that bias</li>
            </ul>
          </Notes>
        </SimpleSlide>



        {/* <SimpleSlide inverted fit={false} statement="i">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide inverted fit={false} statement="and it is often impossible to understand beforehand the far reaching implications of that bias">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide> */}


        <SimpleSlide inverted fit={false} statement="Not to be grim">
          <Notes>
          <ul>
              <li>it takes extra effort to switch our brain from doing the easy thing to thie thing that takes energy</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <ImageSlide image="antarctica.png">

        </ImageSlide>

        <SimpleSlide  fit={false} statement="by 2050, global water demand will increase by 55 percent">
          <Notes>
          <ul>
              <li>f nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate, demand could exceed current sustainable water supplies by 40 percent by 2030</li>
              <li>Some of us in this room will have opportunities to work on tools that attempt to solve some of the world's most pressing problems</li>
            </ul>
          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide  fit={false} statement="Some of us in this room will have opportunities to work on tools that attempt to solve some of the world's most pressing problems">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide> */}


        <SimpleSlide fit={false} statement="We will not be able to build effective tools...">
          <Notes>
            <ul>
            <li> if we do not have an undrestanding of the problem</li>
            </ul>
          </Notes>
        </SimpleSlide>


        <SimpleSlide fit={false} statement="We will not be able to fully understand the problem... ">
          <Notes>
            <ul>
              <li> or the far reaching implications of the solutions</li>
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide  fit={false} statement="Unless the folks building the tools reflect the communities facing the problem">
          <Notes>
            \
          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide inverted fit={false} statement="The community we build - builds the tools to solve problems for the community. So to do this effectively the commuity building those tools needs to reflect the
        community using them">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide> */}

        <SimpleSlide  fit={false} statement="But to do this people need access to the etiquette">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide fit={false} statement="And so a call to action for eveyrone in this room who already has privilege">
          <Notes>
            <ul>
             <li>focus on the small things</li>
             <li>language that's inclusiove</li>
             <li>creating safe spaces</li>
             <li>providing opportunities to reflect and correct misundrestandings before they erode trust in the team</li>
             <li>provding opportunites for others to grow</li>
             <li>modeling behavior that it's ok not to know</li>
            </ul>
          </Notes>
        </SimpleSlide>

        {/* <SimpleSlide inverted fit={false} statement="And so a call to action for eveyroen in this room is to be amabssadords of that etiquette">
          <Notes>
            <ul>
              <li>Provide a safe space</li>
              <li>be an ally</li>
              <li>create an opportunity for someone else</li>
              <li>help someone with access to resources</li>
            </ul>
          </Notes>
        </SimpleSlide> */}


        <SimpleSlide ifit={false} statement="Just maybe">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide>

        <QuoteSlide
          quote="“Progress is the opening of doors and the leveling of opportunity...
           Progress is seeing calmly, accepting, and thinking of others. - Paul Ford“"
        >
        <Notes>
          <div>
            <p>We can acheieve this definition of progress </p>
          </div>
        </Notes>
        </QuoteSlide>

        {/* <SimpleSlide inverted fit={false} statement="Just maybe">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="before software eats the world">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="we can actually make it a bit better">
          <Notes>
            <ul>
            If nothing is done to increase water efficiency and better manage and protect both surface water and groundwater in the face of a changing climate,
             demand could exceed current sustainable water supplies by 40 percent by 2030
            </ul>
          </Notes>
        </SimpleSlide> */}

{/*
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
        </SimpleSlide> */}


        {/* <SimpleSlide fit={false} statement="Yet I realized this doesn't just pertain to software..">
          <Notes>
            <p>
              nerd stuff.
            </p>
          </Notes>
        </SimpleSlide> */}

        {/* <SimpleSlide statement="Conclusions">
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

        </SimpleSlide> */}
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
