<script>
  import { onMount } from "svelte";
  import chartjs from "chart.js/auto";
  import {
    countryDataStore,
    featchData,
    countryPopulation,
  } from "../../store/countryDataStore";
  import Table from "../../components/Table.svelte";

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

<section class="flex flex-col justify-between gap-4 px-4 mt-4 lg:flex-row">
  <Table countryDataStore={$countryDataStore} />
  <div
    class="w-auto h-auto md:h-[500px] mb-6 border border-gray-200 rounded-md"
  >
    <div class="p-4 border-b border-gray-200">
      <span>Countries</span>
    </div>
    <canvas bind:this={chartCanvas} width="400" height="400" />
  </div>
</section>
