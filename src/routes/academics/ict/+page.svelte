<script lang="ts">
  import { Motion } from "svelte-motion";
  import PageTransition from "../../../components/PageTransition.svelte";

  type Selected = "overview" | "curriculum" | "admission" | "faculty";
  let selectedTab: Selected | string = "overview";

  let faculty = [
    {
      name: "John Doe",
      position: "ICT Instructor",
      degree: "Master of Computer Science",
      image: "https://api.dicebear.com/5.x/lorelei/svg?seed=John Doe",
    },
    {
      name: "John Doe",
      position: "ICT Instructor",
      degree: "Master of Computer Science",
      image: "https://api.dicebear.com/5.x/lorelei/svg?seed=John Doe 1",
    },
    {
      name: "John Doe",
      position: "ICT Instructor",
      degree: "Master of Computer Science",
      image: "https://api.dicebear.com/5.x/lorelei/svg?seed=John Doe 2",
    },
    {
      name: "John Doe",
      position: "ICT Instructor",
      degree: "Master of Computer Science",
      image: "https://api.dicebear.com/5.x/lorelei/svg?seed=John Doe 3",
    },
    {
      name: "John Doe",
      position: "ICT Instructor",
      degree: "Master of Computer Science",
      image: "https://api.dicebear.com/5.x/lorelei/svg?seed=John Doe 4",
    },
  ]

  let tabs = [
    {
      name: "Overview",
      value: "overview",
    },
    {
      name: "Curriculum",
      value: "curriculum",
    },
    {
      name: "Admission",
      value: "admission",
    },
    {
      name: "Faculty",
      value: "faculty",
    },
  ];
</script>

<PageTransition>
  <!-- header -->
  <div
    class="min-h-[250px] lg:min-h-[500px] text-primary-content p-10 rounded-btn flex flex-col justify-center bg-center bg-cover bg-[url('https://lh3.googleusercontent.com/m8am03OY7pwMPiYPLQ4K1PimDBzWIv49tLkS5ilqBfI4GadhofpAikaOP7bfmxeLWQHIL1dan7DU8wW0ob5w1s2NKf9CXJqkkehN--SM8ROC-ZzgKA=w2400-rj')]"
  >
    <p class="ml-1 text-sm opacity-50">Senior High Academic Course</p>
    <h1 class="text-3xl md:text-5xl lg:text-6xl max-w-3xl font-semibold">
      Information and Communications Technology
    </h1>
    <p class="mt-5 max-w-xl hidden md:block">
      A vast educational track that deals with the use of various technologies
      to store, process, and communicate information. Specializations in ICT
      include Java and DotNet Programming, which involve software development,
      and Computer Hardware Servicing, which involves maintaining and repairing
      computer hardware. These specializations offer exciting career
      opportunities for individuals interested in technology and innovation.
    </p>
  </div>

  <!-- tabs -->
  <div class="tabs tabs-boxed mt-10 p-2 justify-center lg:gap-5">
    {#each tabs as tab}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <p
        class={`tab tab-sm lg:tab-lg transition rounded-btn ${
          selectedTab === tab.value ? "tab-active" : ""
        }`}
        on:click={() => {
          let selected = tab.value;
          selectedTab = selected;
        }}
      >
        {tab.name}
      </p>
    {/each}
  </div>

  <!-- content -->
  <div class="py-10">
    {#if selectedTab === "overview"}
      <Motion
        animate={{
          translateY: [10, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.2,
            easings: "circOut",
          },
        }}
        let:motion
      >
        <div use:motion class="flex flex-col gap-5 mx-auto prose-sm md:prose-lg">
          <h4 class="text-3xl font-bold">Course Overview</h4>
          <p>
            Information and Communications Technology (ICT) is a strand or track
            in Senior High School (SHS) in the Philippines, which is designed to
            equip students with the skills and knowledge necessary to enter the
            fields of information technology, communications, and digital media.
          </p>
          <p>
            The ICT strand is composed of various subjects that cover both
            technical and practical aspects of information and communication
            technology. These subjects include Computer Programming, Database
            Management, Multimedia Arts, and Web Development. The curriculum
            also includes courses in Entrepreneurship, which prepare students to
            start their own business in the ICT industry.
          </p>
          <p>
            In the ICT strand, students will learn about various computer
            languages such as Java, Python, C++, and HTML. They will also learn
            how to design and develop websites, create computer programs and
            software, manage databases, and produce multimedia content. The
            strand also includes practical skills like project management,
            marketing, and customer service.
          </p>
          <p>
            The ICT strand provides students with a strong foundation in
            computer and technology skills that can be applied in a variety of
            industries, including software development, web design, e-commerce,
            and digital marketing. Additionally, graduates of the ICT strand can
            pursue further education in related fields like computer science,
            information technology, and engineering.
          </p>
          <p>
            Overall, the ICT strand is an excellent choice for students who are
            interested in the technology industry and want to develop their
            skills in this field. It provides a solid foundation in both
            technical and practical aspects of information and communication
            technology and prepares students for a successful career in the
            ever-evolving world of technology.
          </p>
        </div>
      </Motion>
    {/if}
    {#if selectedTab === "curriculum"}
      <Motion
        animate={{
          translateY: [10, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.2,
            easings: "circOut",
          },
        }}
        let:motion
      >
        <div use:motion class="flex flex-col gap-5">
          <h4 class="text-3xl font-bold">Course Curriculum</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              class="shadow p-7 py-5 rounded-btn hover:bg-primary/20 transition"
            >
              <h2 class="text-lg font-bold mb-5">Core Subjects</h2>
              <ul class="list-decimal pl-5">
                <li>Computer Programming</li>
                <li>Database Management</li>
                <li>Multimedia Arts</li>
                <li>Web Development</li>
              </ul>
            </div>

            <div
              class="shadow p-7 py-5 rounded-btn hover:bg-primary/20 transition"
            >
              <h2 class="text-lg font-bold mb-5">Specialized Subjects</h2>
              <ul class="list-decimal pl-5">
                <li>Enterprise Resource Planning (ERP) Systems</li>
                <li>Computer Hardware Servicing</li>
                <li>Network and Server Configuration</li>
                <li>Mobile App Development</li>
              </ul>
            </div>

            <div
              class="shadow p-7 py-5 rounded-btn hover:bg-primary/20 transition"
            >
              <h2 class="text-lg font-bold mb-5">Elective Subjects</h2>
              <ul class="list-decimal pl-5">
                <li>Animation and Game Development</li>
                <li>Digital Marketing</li>
                <li>Entrepreneurship</li>
              </ul>
            </div>

            <div
              class="shadow p-7 py-5 rounded-btn hover:bg-primary/20 transition"
            >
              <h2 class="text-lg font-bold mb-5">Work Immersion</h2>
              <p>
                Students are required to complete 80 hours of work immersion in
                an ICT-related industry, such as software development, web
                design, e-commerce, or digital marketing.
              </p>
            </div>

            <div
              class="shadow p-7 py-5 rounded-btn hover:bg-primary/20 transition last:col-span-full"
            >
              <h2 class="text-lg font-bold mb-5">
                Senior High School Exit Exam
              </h2>
              <p>
                Students are required to pass the ICT strand's exit exam to be
                eligible for graduation.
              </p>
            </div>
          </div>
        </div>
      </Motion>
    {/if}
    {#if selectedTab === "admission"}
      <Motion
        animate={{
          translateY: [10, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.2,
            easings: "circOut",
          },
        }}
        let:motion
      >
        <div use:motion class="flex flex-col gap-5">
          <h4 class="text-3xl font-bold">Course Admission</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              class="shadow h-max p-7 py-5 rounded-btn hover:bg-primary/20 transition"
            >
              <h5 class="text-lg font-bold mb-5">Admission Requirements</h5>
              <ul class="list-decimal pl-5 flex flex-col gap-2">
                <li>Junior High school diploma or equivalent</li>
                <li>Completed application form</li>
                <li>
                  Good academic standing (based on the school's admission
                  criteria)
                </li>
                <li>Admission test results (if required)</li>
              </ul>
            </div>
            <div
              class="shadow h-max  p-7 py-5 rounded-btn hover:bg-primary/20 transition"
            >
              <h5 class="text-lg font-bold mb-5">Steps to follow</h5>
              <ul class="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  Research and choose the school that offers the ICT Senior High
                  School program that you want to enroll in.
                </li>
                <li>
                  Check the admission requirements of the school and make sure
                  you meet them.
                </li>
                <li>
                  Wait for the admission office to inform you of the schedule of
                  the admission test, if required.
                </li>
                <li>
                  Take the admission test, if required, and wait for the
                  results.
                </li>
                <li>
                  If you pass the admission test and meet the admission criteria
                  of the school, the school will inform you of your acceptance.
                </li>
                <li>
                  Complete the registration process and pay the necessary fees
                  to secure your slot in the ICT Senior High School program.
                </li>
                <li>
                  Attend the orientation and follow the instructions of the
                  school on how to prepare for the start of the academic year.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Motion>
    {/if}
    {#if selectedTab === "faculty"}
      <Motion
        animate={{
          translateY: [10, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.2,
            easings: "circOut",
          },
        }}
        let:motion
      >
        <div use:motion class="flex flex-col gap-5">
          <h4 class="text-3xl font-bold">Course Faculty</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {#each faculty as item}
              <div class="rounded-btn p-5 flex flex-col items-center text-center">
                <img src={item.image} class="w-24 h-24 md:w-32 md:h-32 mask mask-squircle" alt="faculty">
                <p class="text-lg md:text-xl font-semibold">{item.name}</p>
              </div>
            {/each}
          </div>
        </div>
      </Motion>
    {/if}
  </div>
</PageTransition>
