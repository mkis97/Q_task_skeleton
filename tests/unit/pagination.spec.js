import { mount } from "@vue/test-utils";
import { Pagination } from "@/shared/components/Pagination";

describe("Pagination.vue", () => {
  it("emits input", async () => {
    const props = {
      value: 1,
    };

    const wrapper = mount(Pagination, {
      propsData: props,
    });

    wrapper.vm.$emit("input");
    wrapper.vm.$emit("input", 2);

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input).toBeTruthy();

    expect(wrapper.emitted().input.length).toBe(2);

    expect(wrapper.emitted().input[1]).toEqual([2]);
  });
});
