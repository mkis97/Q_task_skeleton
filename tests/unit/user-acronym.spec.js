import { shallowMount } from "@vue/test-utils";
import { UserAcronym } from "@/shared/components/UserAcronym";

describe("UserAcronym.vue", () => {
  it("renders props.acronym when passed", () => {
    const acronym = "MK";
    const wrapper = shallowMount(UserAcronym, {
      propsData: { acronym },
    });
    expect(wrapper.text()).toMatch(acronym);
  });
});
