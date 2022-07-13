import { shallowMount, createLocalVue } from "@vue/test-utils";
import { CommentItem } from "@/shared/components/CommentItem";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import capitalize from "@/shared/filters/capitalize";

describe("CommentItem.vue", () => {
  const comment = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  };

  const localVue = createLocalVue();
  localVue.filter("capitalize", capitalize);
  localVue.component("font-awesome-icon", FontAwesomeIcon);

  const wrapper = shallowMount(CommentItem, {
    localVue,
    propsData: { comment },
    mocks: {
      $t: (str) => {
        return str;
      },
    },
  });

  it("renders props.name when passed", () => {
    expect(wrapper.find(".comment_creator").text()).toMatch(
      capitalize(comment.name)
    );
  });

  it("renders props.comment when passed", () => {
    expect(wrapper.find(".comment_body").text()).toMatch(
      capitalize(comment.body)
    );
  });

  it("renders props.email when passed", () => {
    expect(wrapper.find(".comment_link").text()).toMatch(
      capitalize(`POSTS_PAGE.BY: ${comment.email}`)
    );
  });
});
