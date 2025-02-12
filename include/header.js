document.write(`

 <!-- Loader Start -->
  <div class="loader-wrapper">
    <div class="loader animate">
      <span>O</span>
      <span>S</span>
      <span>L</span>
      <span>O</span>
    </div>
  </div>
  <!-- Loader End -->
  <!-- Overlay -->
  <a href="javascript:void(0)" class="overlay-general overlay-common"></a>
  <!-- Header Start -->
  <header class="header-common header5">
    <!-- Top Header -->
   
    <div class="container-lg">
      <div class="nav-wrap">
        <!-- Navigation Start -->
        <nav class="navigation">
          <div class="nav-section">
            <div class="header-section">
              <div class="navbar navbar-expand-xl navbar-light navbar-sticky p-0">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu"
                  aria-controls="primaryMenu">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <a href="index.html" class="logo-link">
                  <img class="logo logo-dark" src="/assets/images/logos/logo-5.png" alt="logo" />
                  <img class="logo logo-light" src="/assets/images/logos/logo-5.png" alt="logo" />
                </a>
                <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                  <div class="offcanvas-header navbar-shadow">
                    <h5 class="mt-1 mb-0">Menu</h5>
                    <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                      aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <!-- Menu-->
                    <ul class="navbar-nav">
                      <!-- Home -->
                      <li class="nav-item dropdown dropdown-mega">
                        <a class="nav-link dropdown-toggle" href="index.html">Home</a>
                      </li>

                      <!-- Shop -->
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="shop.html">NEET</a>
                      </li>

                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="shop.html">UPSC</a>
                      </li>

                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="shop.html">Jee Main Advanced</a>
                      </li>

                      <!-- Pages -->
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="shop.html">cUET</a>
                      </li>

                      <!-- Blog -->
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- Navigation End -->

        <!-- Menu Right Start  -->
        <div class="menu-right">
          <div class="select-menu">
            <div class="dropdown select-dropdown">
              <button id="unitSelected"><span>INR</span> <i data-feather="chevron-down"></i></button>
              <ul class="onhover-show-div">
                <li class="unit">USD</li>
                <li class="unit">EUR</li>
                <li class="unit">INR</li>
                <li class="unit">CNY</li>
              </ul>
            </div>
           
          </div>

          <!-- Icon Menu Start -->
          <ul class="icon-menu">
            <li>
              <button class="search-button"><i data-feather="search"></i></button>
              <!-- Search Input Start -->
              <div class="search-full">
                <div class="input-group">
                  <span class="input-group-text">
                    <i data-feather="search"></i>
                  </span>
                  <input type="text" class="form-control search-type" placeholder="Search here" />
                  <span class="input-group-text close-search">
                    <i data-feather="x"></i>
                  </span>
                </div>

                <!-- Suggestion Start -->
                
                <!-- Suggestion Start -->
              </div>
              <!-- Search Input End -->
            </li>

            <li class="user">
              <div class="dropdown user-dropdown">
                <a href="javascript:void(0)"><i data-feather="user"></i></a>
                
              </div>
            </li>

            
            <!-- Cart Menu Start -->
            <li>
              <div class="dropdown shopingbag">
                <a href="javascript:void(0)" class="cart-button"><i data-feather="shopping-bag"></i> <span
                    class="notification-label">3</span></a>
                <a href="javascript:void(0)" class="overlay-cart overlay-common"></a>
                <div class="onhover-cart-dropdown">
                  <div class="onhover-show-div">
                    <div class="dropdown-header">
                      <div class="control">
                        <a href="cart.html">Shopping Cart</a>
                        <button class="back-cart"><i data-feather="arrow-right"></i></button>
                      </div>
                    </div>

                    
                    <div class="dropdown-footer">
                      <div class="freedelevery">
                        <p class="terms-condition">FREE SHIPPING! Continue Shopping to add more product to you cart and
                          receive free shipping for orders over <strong>$500</strong></p>
                        <div class="progress">
                          <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                      </div>
                      <div class="total-price">
                        <span>Total</span>
                        <span>$450</span>
                      </div>

                      <div class="btn-group block-group">
                        <a href="cart.html" class="btn-solid">View Cart</a>
                        <a href="payment.html" class="btn-outline">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- Cart Menu End -->
          </ul>
          <!-- Icon Menu End -->
        </div>
        <!-- Menu Right End  -->
      </div>
    </div>
  </header>
  <!-- Header End -->


`);