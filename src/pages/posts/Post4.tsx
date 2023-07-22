import CodeBlock from "../blog/CodeBlock";
import Credits from "../blog/Credits";
import PostCell from "../../components/PostCell";
import PostHeader from "./PostHeader";
import ReturnBlog from "../blog/ReturnBlog";
import post4_1 from "/src/assets/posts/post4/post4_1.png";
import post4_2 from "/src/assets/posts/post4/post4_2.png";
import post4_3 from "/src/assets/posts/post4/post4_3.png";
import post4_4 from "/src/assets/posts/post4/post4_4.png";
import post4_5 from "/src/assets/posts/post4/post4_5.png";
import post4_6 from "/src/assets/posts/post4/post4_6.png";
import post4_7 from "/src/assets/posts/post4/post4_7.png";
import post4_8 from "/src/assets/posts/post4/post4_8.png";

function Post4() {
  return (
    <div className="flex flex-col gap-10 mb-16 lg:post-desktop-settings">
      {/* Header */}
      <div>
        <PostHeader
          category="Intro to iOS: Swift Basics"
          date="June 26, 2023"
          title="Data Structures"
        />
      </div>

      {/* Intro */}
      <p className="post-body">
        We learned how to use variables and constants to store data, but only
        explored basic values such as integer numbers and text. However, when we
        program, we often need to hold more complicated data that requires a
        specialized format for organizing and retrieving the data. To do this,
        we use <span className="font-bold">Data Structures</span>.
      </p>

      {/* Arrays */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Arrays</h2>
          <p className="post-body">
            The most common data structure that you will be using is an{" "}
            <span className="font-bold">array</span>. Arrays store a group of
            values together into a single collection, and you can access these
            values using their position in the array.
          </p>
          <CodeBlock
            codeString={`var staff = ["Vin", "Richie", "Tiffany", "Jennifer", "Antoinette", "Elvis"]
staff[0]
staff[1]
staff[2]`}
          />
          <img
            src={post4_1}
            alt="Creating an accessing an array"
            className="post-code-image"
          />
          <p className="post-body">
            We use square brackets <span className="post-code">[]</span> to mark
            the start and end point of the array and use commas{" "}
            <span className="post-code">,</span> to separate each value.
          </p>
        </div>
        <div>
          <p className="post-body">
            Swift uses <span className="font-italic">type inferencing</span> to
            determine the type of <span className="post-code">staff</span>.
            Because all of the elements inside of the array are strings, Swift
            knows that <span className="post-code">staff</span> is an array of
            strings (<span className="post-code">Array&lt;String&gt;</span>). If
            we change the value of an element to a different type, our code will
            not compile.
          </p>
          <img
            src={post4_2}
            alt="Cannot change the type of our array"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            Instead of letting Swift infer what types our array will hold, we
            can specify the type that we want.
          </p>
          <img
            src={post4_3}
            alt="Specifying array type"
            className="post-code-image"
          />
          <p className="post-body">
            As you can see, if we put in a value that does not match with the
            given type, our code will not compile.
          </p>
        </div>
        <div>
          <p className="post-body">
            However, it is possible to allow our arrays to hold any type. We can
            give it the special Any data type:
          </p>
          <img
            src={post4_4}
            alt="Specifying array type to Any"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            When adding values to our array, we must first initialize it with an
            original value. The following code will not compile:
          </p>
          <img
            src={post4_5}
            alt="Arrays must be initialized"
            className="post-code-image"
          />
          <p className="post-body">
            We can initialize our array in the following ways:
          </p>
          <CodeBlock
            codeString={`var staff: [String] = []\nvar staff = [String]()`}
          />
          <img
            src={post4_6}
            alt="How to initialize an array"
            className="post-code-image"
          />
          <p className="post-body">
            You may have noticed that I used an{" "}
            <span className="post-code">append</span> method to add elements to
            the end of the array. Swift provides many methods that you can use
            on your array, and you can even add your own! You can also use
            operators such as <span className="post-code">+</span> to glue
            arrays together and return a new array. You can read about them in
            the{" "}
            <a
              href="https://developer.apple.com/documentation/swift/array"
              className="font-bold text-primary url-link"
            >
              Apple Documentation
            </a>
            .
          </p>
        </div>
      </div>

      {/* Dictionaries */}
      <div className="post-section">
        <div>
          <h2 className="post-heading">Dictionaries</h2>
          <p className="post-body">
            Another common data structure that you might encounter are called{" "}
            <span className="font-bold">dictionaries</span>. These are similar
            to arrays except you use a <span className="font-bold">key</span> to
            access a value in the collection. In other words, dictionaries store{" "}
            <span className="font-bold">key-value pairs</span>.
          </p>
          <CodeBlock
            codeString={`var staffAge: [String: Int] = ["Vin": 19, "Richie": 20, "Antoinette": 4]`}
          />
          <img
            src={post4_7}
            alt="Creating a dictionary"
            className="post-code-image"
          />
        </div>
        <div>
          <p className="post-body">
            It is also common to break up our dictionary like so to keep things
            readable:
          </p>
          <img
            src={post4_8}
            alt="Creating a dictionary with nice formatting"
            className="post-code-image"
          />
          <p className="post-body">
            Similar to arrays, Swift provides a lot of methods that we can use
            with dictionaries. You can read about them in the{" "}
            <a
              href="https://developer.apple.com/documentation/swift/dictionary"
              className="font-bold text-primary url-link"
            >
              Apple Documentation
            </a>
            .
          </p>
        </div>
      </div>

      {/* Credits */}
      <Credits />

      {/* See More */}
      <div className="flex flex-col gap-8 lg:gap-16">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          More on Intro to iOS: Swift Basics
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 lg:justify-center">
          <PostCell
            date="June 1"
            title="Variables and Constants"
            body="In almost any program that we create, we will need to store data at some point. In Swift, you can store data in two ways: variables and constants."
            destination="/blog/intro-to-ios/variables-and-constants"
          />
          <PostCell
            date="June 12"
            title="Data Types"
            body="In the variables and constants section, we assigned a text to a variable. In Swift, this is called a String and is one of the most important types you will use. However, there are many more types of data that Swift handles."
            destination="/blog/intro-to-ios/data-types"
          />
        </div>
        <ReturnBlog />
      </div>
    </div>
  );
}

export default Post4;