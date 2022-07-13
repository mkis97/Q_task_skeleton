import { shallowMount, mount } from "@vue/test-utils";
import { Input } from "@/shared/components/Input";

describe("Input.vue", () => {
  it("renders props.label when passed", () => {
    const props = {
      value: "value",
      type: "text",
      inputId: "input_id",
      label: "Input label",
      errorMsg: "",
    };
    const wrapper = shallowMount(Input, {
      propsData: props,
    });
    expect(wrapper.text()).toMatch(props.label);
  });

  it("renders props.errorMsg when passed", () => {
    const props = {
      value: "value",
      type: "text",
      inputId: "input_id",
      label: "",
      errorMsg: "Error",
    };
    const wrapper = shallowMount(Input, {
      propsData: props,
    });
    expect(wrapper.text()).toMatch(props.errorMsg);
  });

  it("emits input", async () => {
    const props = {
      value: "value",
      type: "text",
      inputId: "input_id",
      label: "Input label",
      errorMsg: "",
    };

    const wrapper = mount(Input, {
      propsData: props,
    });

    wrapper.vm.$emit("input");
    wrapper.vm.$emit("input", "Hi");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input).toBeTruthy();

    expect(wrapper.emitted().input.length).toBe(2);

    expect(wrapper.emitted().input[1]).toEqual(["Hi"]);
  });
});
