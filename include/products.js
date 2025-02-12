document.write(`


    <section class="pt-0">
      <div class="container-lg">
        <div class="title-box6 side-by-side align-items-end">
          <div>
            <h2 class="main-title">Popular In Store</h2>
            <p class="content">Here are some products that are quickly popular in store, we give the best price quotes
              on your watch</p>
          </div>

          <ul class="nav nav-tabs6" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="latest-products-tab" data-bs-toggle="tab"
                data-bs-target="#latest-products" type="button" role="tab" aria-controls="latest-products"
                aria-selected="true">
                Latest Products
              </button>
            </li>
            <li class="border-list-item">
              <span class="dashed-border"></span>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="best-selling-tab" data-bs-toggle="tab" data-bs-target="#best-selling"
                type="button" role="tab" aria-controls="best-selling" aria-selected="false">
                Best Selling
              </button>
            </li>
            <li class="border-list-item">
              <span class="dashed-border"></span>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="feature-products-tab" data-bs-toggle="tab" data-bs-target="#feature-products"
                type="button" role="tab" aria-controls="feature-products" aria-selected="false">
                Feature Products
              </button>
            </li>
          </ul>
        </div>

        <div class="tab-content ratio_asos" id="myTabContent">
          <!-- Latest Product Tabs Start -->
          <div class="tab-pane fade show active" id="latest-products" role="tabpanel"
            aria-labelledby="latest-products-tab">
            <div class="latest-products">
              <div class="row g-2 g-sm-3 g-xl-4 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5">
               
              homeproducts.forEach((element, index, array) => {

                <div class="col wow fadeInUp" data-wow-delay="0.4s">
                  <div class="product-card product-card5">
                    <div class="img-box">
                      <a href="product.html" class="primary-img"><img class="img-fluid bg-img"
                          src="/assets/images/watch/product/1.jpg" alt="product" /> </a>

                      <!-- Option -->
                      <ul class="option-wrap">
                        <li data-bs-toggle="tooltip" data-bs-placement="left" title="My Wishlist">
                          <a href="javascript:void(0)" class="wishlist-btn">
                            <i data-feather="heart"></i>
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="left" title="Compare">
                          <a href="compare.html"><i data-feather="repeat"></i></a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="left" title="View Product">
                          <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#viewModal">
                            <i data-feather="eye"></i>
                          </a>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="left" title="My Cart">
                          <a href="javascript:void(0)" class="addtocart-btn">
                            <i data-feather="shopping-bag"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <!-- Content Box -->
                    <div class="content-box">
                      <a href="product.html">
                        <h5>${element.title}</h5>
                      </a>
                      <div class="thumb-wrapper">
                        <span>Rs 50.00</span>
                        <!-- Thumbnail -->
                        
                      </div>
                    </div>
                  </div>
                </div>

                 });
                
              </div>
            </div>
          </div>
          <!-- Feature Product Tabs End -->
        </div>
      </div>
    </section>
    
    
    `);