<section class="">
  <div
    class="grid h-screen grid-cols-1 gap-0 md:grid-cols-4 lg:grid-cols-12 md:grid-rows-6"
  >
    <div class="bg-blue-400 h-60 lg:row-span-3 lg:col-span-2 md:h-auto" />
    <div
      class="bg-teal-400 h-60 lg:col-start-1 lg:row-span-2 lg:row-start-4 lg:col-span-2 md:h-auto"
    />
    <div
      class="h-60 lg:col-start-1 lg:row-start-6 lg:col-span-6 bg-fuchsia-400 md:h-auto"
    />
    <div
      class="h-60 lg:col-start-3 lg:row-span-5 lg:row-start-1 lg:col-span-4 bg-rose-100 md:h-auto"
    />
    <div
      class="bg-blue-100 h-60 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:col-span-6 md:h-auto"
    />
    <div
      class="flex items-center justify-center py-20 bg-yellow-100 lg:py-0 md:px-10 lg:col-start-7 lg:row-span-4 lg:row-start-3 md:col-span-3 lg:col-span-4"
    >
      <div class="box">
        <div class="circle">
          <div class="circle-background">
            <div class="hill1" />
            <div class="hill2" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-60 lg:col-start-11 lg:row-span-4 lg:row-start-3 lg:col-span-2 bg-emerald-400 md:h-auto"
    />
  </div>
</section>

<style>
  .box {
    width: 300px;
    height: 300px;
    background-color: #293462;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
  .circle-background {
    width: 300px;
    height: 300px;
    background-color: rgb(254, 249, 195);
    position: relative;
  }

  .hill1 {
    background-color: #fe5f55;
    width: 180px;
    height: 200px;
    position: absolute;
    bottom: 0;
    right: 20%;
    transform: rotate(40deg);
  }

  .hill2 {
    background-color: #fe5f55;
    width: 150px;
    height: 130px;
    position: absolute;
    bottom: 5%;
    left: -5%;
    transform: rotate(45deg);
  }
</style>
