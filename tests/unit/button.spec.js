import { shallowMount } from "@vue/test-utils";
import { Button } from "@/shared/components/Button";

describe("Button.vue", () => {
  it("renders props.value when passed", () => {
    const msg = "Test";
    const wrapper = shallowMount(Button, {
      propsData: { value: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
