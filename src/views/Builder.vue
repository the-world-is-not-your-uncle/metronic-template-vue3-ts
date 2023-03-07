<template>
  <!--begin::Layout Builder Notice-->
  <div class="card mb-10">
    <div class="card-body d-flex align-items-center py-8">
      <!--begin::Icon-->
      <div
        class="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative"
      >
        <span class="svg-icon svg-icon-primary position-absolute opacity-15">
          <inline-svg
            src="media/icons/duotune/abstract/abs051.svg"
            class="h-80px w-80px"
          />
        </span>
        <span class="svg-icon svg-icon-3x svg-icon-primary position-absolute">
          <inline-svg src="media/icons/duotune/coding/cod009.svg" />
        </span>
      </div>
      <!--end::Icon-->

      <!--begin::Description-->
      <div class="ms-6">
        <p class="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0">
          The layout builder is to assist your set and configure your preferred
          project layout specifications and preview it in real time and export
          the HTML template with its includable partials of this demo. The
          downloaded version does not include the assets folder since the layout
          builder's main purpose is to help to generate the final HTML code
          without hassle.
        </p>
      </div>
      <!--end::Description-->
    </div>
  </div>
  <!--end::Layout Builder Notice-->

  <div class="card mb-10">
    <!--begin::Header-->
    <div class="card-header card-header-stretch">
      <ul
        id="kt_layout_builder_tabs"
        ref="kt_layout_builder_tabs"
        class="nav nav-stretch nav-line-tabs fw-bold border-0"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 0 }"
            data-bs-toggle="tab"
            data-tab-index="0"
            href="#kt_builder_main"
            role="tab"
            @click="setActiveTab($event)"
          >
            Main
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 1 }"
            data-bs-toggle="tab"
            data-tab-index="1"
            href="#kt_builder_header"
            role="tab"
            @click="setActiveTab($event)"
          >
            Header
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 2 }"
            data-bs-toggle="tab"
            data-tab-index="2"
            href="#kt_builder_subheader"
            role="tab"
            @click="setActiveTab($event)"
          >
            Subheader
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 3 }"
            data-bs-toggle="tab"
            data-tab-index="3"
            href="#kt_builder_aside"
            role="tab"
            @click="setActiveTab($event)"
          >
            Aside
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 4 }"
            data-bs-toggle="tab"
            data-tab-index="4"
            href="#kt_builder_content"
            role="tab"
            @click="setActiveTab($event)"
          >
            Content
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 5 }"
            data-bs-toggle="tab"
            data-tab-index="5"
            href="#kt_builder_footer"
            role="tab"
            @click="setActiveTab($event)"
          >
            Footer
          </a>
        </li>
      </ul>
    </div>
    <!--end::Header-->

    <!--begin::Form-->
    <form id="kt_layout_builder_form" class="form" @submit="submit($event)">
      <!--begin::Body-->
      <div class="card-body">
        <div id="kt_tabs" class="tab-content pt-3">
          <div
            id="kt_builder_main"
            class="tab-pane"
            :class="{ active: tabIndex === 0 }"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Loader:</label>
              <div class="col-lg-9 col-xl-4">
                <div
                  class="form-check form-check-custom form-check-solid form-switch mb-2"
                >
                  <input
                    v-model="config.loader.display"
                    class="form-check-input"
                    type="checkbox"
                  />
                </div>
                <div class="form-text text-muted">Display Page Loader</div>
              </div>
            </div>

            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Loader Type:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.loader.type"
                  class="form-select form-select-solid"
                >
                  <option value="default">Spinner</option>
                  <option value="spinner-message">Spinner & Message</option>
                  <option value="spinner-logo">Spinner & Logo</option>
                </select>
                <div class="form-text text-muted">Select Page Loader type</div>
              </div>
            </div>
          </div>

          <div
            id="kt_builder_header"
            class="tab-pane"
            :class="{ active: tabIndex === 1 }"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Fixed Header:</label
              >
              <div class="col-lg-9 col-xl-4">
                <input v-model="config.header.fixed.desktop" type="hidden" />
                <input
                  v-model="config.header.fixed.tabletAndMobile"
                  type="hidden"
                />

                <label
                  class="form-check form-check-custom form-check-solid form-switch mb-5"
                >
                  <input
                    v-model="config.header.fixed.desktop"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <span class="form-check-label text-muted">Desktop</span>
                </label>

                <label
                  class="form-check form-check-custom form-check-solid form-switch mb-5"
                >
                  <input
                    v-model="config.header.fixed.tabletAndMobile"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <span class="form-check-label text-muted"
                    >Tablet & Mobile</span
                  >
                </label>

                <div class="form-text text-muted">Enable fixed header</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Menu Icon:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.header.menuIcon"
                  class="form-select form-select-solid"
                >
                  <option value="svg">SVG Icon</option>
                  <option value="font">Font Icon</option>
                </select>
                <div class="form-text text-muted">Select menu icon type.</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.header.width"
                  class="form-select form-select-solid"
                >
                  <option value="fluid">Fluid</option>
                  <option value="fixed">Fixed</option>
                </select>
                <div class="form-text text-muted">
                  Select header width type.
                </div>
              </div>
            </div>
          </div>

          <div
            id="kt_builder_subheader"
            class="tab-pane"
            :class="{ active: tabIndex === 2 }"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Display:</label
              >
              <div class="col-lg-9 col-xl-4">
                <input v-model="config.toolbar.display" type="hidden" />
                <div
                  class="form-check form-check-custom form-check-solid form-switch mb-2"
                >
                  <input
                    v-model="config.toolbar.display"
                    class="form-check-input"
                    type="checkbox"
                    value="true"
                  />
                </div>
                <div class="form-text text-muted">Display Subheader</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.toolbar.width"
                  class="form-select form-select-solid"
                >
                  <option value="fluid">Fluid</option>
                  <option value="fixed">Fixed</option>
                </select>
                <div class="form-text text-muted">
                  Select layout width type.
                </div>
              </div>
            </div>
          </div>

          <div
            id="kt_builder_aside"
            class="tab-pane"
            :class="{ active: tabIndex === 3 }"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Theme:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.aside.theme"
                  class="form-select form-select-solid"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
                <div class="form-text text-muted">Set aside theme</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Menu Icon:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.aside.menuIcon"
                  class="form-select form-select-solid"
                >
                  <option value="svg">SVG Icon</option>
                  <option value="font">Font Icon</option>
                </select>
                <div class="form-text text-muted">Select menu icon type.</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Display:</label
              >
              <div class="col-lg-9 col-xl-4">
                <span class="switch switch-icon">
                  <input v-model="config.aside.display" type="hidden" />
                  <div
                    class="form-check form-check-custom form-check-solid form-switch mb-2"
                  >
                    <input
                      v-model="config.aside.display"
                      class="form-check-input"
                      type="checkbox"
                    />
                  </div>
                </span>
                <div class="form-text text-muted">Display Aside</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Minimized:</label
              >
              <div class="col-lg-9 col-xl-4">
                <span class="switch switch-icon">
                  <input v-model="config.aside.minimized" type="hidden" />
                  <div
                    class="form-check form-check-custom form-check-solid form-switch mb-2"
                  >
                    <input
                      v-model="config.aside.minimized"
                      class="form-check-input"
                      type="checkbox"
                    />
                  </div>
                </span>
                <div class="form-text text-muted">
                  Minimize secondary panel by default
                </div>
              </div>
            </div>
          </div>

          <div
            id="kt_builder_content"
            class="tab-pane"
            :class="{ active: tabIndex === 4 }"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.content.width"
                  class="form-select form-select-solid"
                >
                  <option value="fluid">Fluid</option>
                  <option value="fixed">Fixed</option>
                </select>
                <div class="form-text text-muted">
                  Select layout width type.
                </div>
              </div>
            </div>
          </div>

          <div
            id="kt_builder_footer"
            class="tab-pane"
            :class="{ active: tabIndex === 5 }"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  v-model="config.footer.width"
                  class="form-select form-select-solid"
                >
                  <option value="fluid">Fluid</option>
                  <option value="fixed">Fixed</option>
                </select>
                <div class="form-text text-muted">
                  Select layout width type.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-6">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-9">
            <input
              id="kt_layout_builder_tab"
              type="hidden"
              name="layout-builder[tab]"
            />
            <input
              id="kt_layout_builder_action"
              type="hidden"
              name="layout-builder[action]"
            />

            <button
              id="kt_layout_builder_preview"
              type="submit"
              class="btn btn-primary me-2"
            >
              <span class="indicator-label"> Preview </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <button
              id="kt_layout_builder_reset"
              type="button"
              class="btn btn-active-light btn-color-muted fw-bold"
              @click="reset($event)"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <!--end::Footer-->
    </form>
    <!--end::Form-->
  </div>

  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Heading-->
      <h1 id="overview" class="anchor fw-bolder mb-5">Generated config</h1>
      <!--end::Heading-->
      <div class="py-5">
        This config is used as a <b>{{ themeName }}</b> layout config, you can
        update default values inside file
        <code>metronic/vue/theme/src/core/config/DefaultLayoutConfig.ts</code>
      </div>
      <CodeHighlighter lang="json">{{ config }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { config } from "@/core/helpers/config";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { themeName } from "@/core/helpers/documentation";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "Builder",
  components: {
    CodeHighlighter,
  },
  setup() {
    const tabIndex = ref(0);

    onMounted(() => {
      // set the tab from previous
      tabIndex.value = parseInt(localStorage.getItem("builderTab") || "0");

      setCurrentPageTitle("Layout Builder");
    });

    /**
     * Reset config
     * @param event
     */
    const reset = (event) => {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    };

    /**
     * Set active tab when the tab get clicked
     * @param event
     */
    const setActiveTab = (event) => {
      tabIndex.value = parseInt(event.target.getAttribute("data-tab-index"));
      // keep active tab
      localStorage.setItem("builderTab", tabIndex.value.toString());
    };

    /**
     * Submit form
     * @param event
     */
    const submit = (event) => {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(config.value));
      window.location.reload();
    };

    return {
      tabIndex,
      config,
      reset,
      setActiveTab,
      submit,
      themeName,
    };
  },
});
</script>
