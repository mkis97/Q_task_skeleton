import { mount } from "@vue/test-utils";
import { LoginForm } from "@/shared/components/LoginForm";

describe("LoginForm.vue", () => {
  it("emits login", async () => {
    const wrapper = mount(LoginForm, {
      mocks: {
        $t: (str) => {
          return str;
        },
      },
    });

    wrapper.vm.$emit("login");
    wrapper.vm.$emit("login");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().login).toBeTruthy();
  });
});
