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
    class="min-h-[250px] lg:min-h-[500px] text-primary p-10 rounded-btn flex flex-col justify-center bg-center bg-cover bg-[url('https://lh3.googleusercontent.com/fhyw5DMHcxoROzow8owQApE7MxUGVdH1lIXisNu9PZqkXYJD19fxLeauvE5OWp_jL-TG0En553TqcNUvPheP9CnsvA-yA0Q8fK7VUlXHfob2jfOLdQyn=w960')]"
  >
    <p class="ml-1 text-sm opacity-50">Senior High Academic Course</p>
    <h1 class="text-3xl md:text-5xl lg:text-6xl max-w-3xl font-semibold">
      Home Economics
    </h1>
    <p class="mt-5 max-w-xl hidden md:block">
      Home Economics is an interdisciplinary field of study focusing on the relationship between individuals, families, and communities, and the environment in which they live. It covers topics like nutrition, clothing and textiles, housing and interior design, family resource management, consumer education, human development and family studies.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ab blanditiis, dicta necessitatibus, minima tempore error iste odio doloribus modi delectus! Deleniti, laborum velit ullam cum suscipit dolor voluptate eaque repellendus nesciunt totam rem, cupiditate ad! Odio mollitia doloribus deleniti ex quidem blanditiis fugiat nobis eos. Dicta nobis ab recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim corporis architecto quod cupiditate ipsa tempora consequatur optio fuga facilis rerum cum fugit distinctio quaerat, omnis a tenetur ipsam sunt sed. Amet, optio! Alias nemo nostrum iste veritatis, rerum nihil corrupti distinctio temporibus id quis praesentium obcaecati illum error doloribus minima incidunt itaque? Aperiam corporis itaque eligendi nesciunt, perferendis voluptatem cumque quaerat necessitatibus nisi natus aliquam dolor reprehenderit saepe esse delectus corrupti, animi dolores? At recusandae tenetur, ad molestiae magnam aspernatur distinctio quasi! Recusandae cum accusantium temporibus non ipsum, corrupti reprehenderit culpa quasi? Magni vitae explicabo, iusto pariatur delectus odio.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolores consequuntur obcaecati perspiciatis numquam, quae non mollitia reiciendis odio modi soluta fugiat, pariatur suscipit quas assumenda veniam laborum blanditiis porro praesentium ducimus tenetur. Natus suscipit similique id minus nostrum ipsa reprehenderit! Unde impedit laudantium aliquid, iusto optio dolores incidunt beatae!
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
