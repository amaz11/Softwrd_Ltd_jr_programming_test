<script>
  import { onMount } from "svelte";
  import chartjs from "chart.js/auto";
  import {
    countryDataStore,
    featchData,
    countryPopulation,
  } from "../../store/countryDataStore";

  let ctx;
  let chartCanvas;
  onMount(async () => {
    await featchData();
    ctx = chartCanvas.getContext("2d");
    new chartjs(ctx, {
      type: "polarArea",
      data: {
        labels: $countryPopulation.map((item) => item.country),
        datasets: [
          {
            data: $countryPopulation.map((item) => item.population),
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
              "rgba(153, 102, 255)",
              "rgba(255, 159, 64)",
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
            ],
          },
        ],
      },
    });
  });
</script>

<section class="flex flex-col justify-between gap-4 px-4 lg:flex-row">
  <div class="w-full">
    <div class="border border-b-0 border-gray-200 rounded">
      <div class="overflow-x-auto">
        <div
          class="inline-block min-w-full overflow-hidden rounded-lg shadow-md"
        >
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  Flag
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  Name
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  Population
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  CIOC
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  UN Member Status
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  Currencies(Key)
                </th>
                <th
                  class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-700 uppercase border-b-2"
                >
                  Languages
                </th>
              </tr>
            </thead>
            <tbody>
              {#if $countryDataStore.length === 0}
                <p>Loading...</p>
              {:else}
                {#each $countryDataStore as item (item.name.common)}
                  <tr>
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <div class="flex items-center justify-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full"
                            src={item.flags.png}
                            alt=""
                          />
                        </div>
                      </div></td
                    >
                    <td
                      class="px-5 py-5 text-sm text-center bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.name.common}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 text-sm text-center bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.population}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 text-sm text-center bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.cioc}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="flex items-center justify-center">
                        {#if item.unMember}
                          <span
                            class="px-3 py-1 font-semibold text-center text-white bg-gray-400 rounded"
                            >Yes</span
                          >
                        {:else}
                          <span
                            class="px-3 py-1 mx-auto font-semibold text-center text-white bg-gray-500 rounded"
                            >No</span
                          >
                        {/if}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-center text-gray-900 whitespace-no-wrap">
                        {#each Object.entries(item?.currencies) as [key]}
                          {key}
                        {/each}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p
                        class="flex items-center justify-center gap-1 text-center text-gray-900 whitespace-no-wrap"
                      >
                        {#each Object.entries(item?.languages) as [key]}
                          <span>
                            {key.toLocaleUpperCase()}
                            {#if Object.keys(item?.languages).length > 1}
                              ,
                            {/if}
                          </span>
                        {/each}
                      </p>
                    </td>
                  </tr>
                {/each}
              {/if}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-auto h-auto md:h-[500px] mb-6 border border-gray-200 rounded-md"
  >
    <div class="p-4 border-b border-gray-200">
      <span>Countries</span>
    </div>
    <canvas bind:this={chartCanvas} width="400" height="400" />
  </div>
</section>
