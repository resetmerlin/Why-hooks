### 주제: hook이란 무엇일까?

사이드 프로젝트인 Nike eCommerce 코드를 피드백 받고 난 후 든 생각:

"왜? 라는 근본적인 생각을 자주 못한다"라는 것이었다. 이는 개발자에게 매우 치명적이다. 왜 사용하는지 모르고 사용하는건 논리적이지 못하다. 

자 hook이라는건 뭘까?

#### 내가 생각하기에 hook이란?

일단 우리가 비즈니스 로직을 컴포넌트에 부여할때 생으로 코드를 작성하지 않는다. 예로 들어서 React 같은 경우 useEffect라는 훅을 사용해서 api call을 하는 등 가공하는 단계를 거친다. 그니까 ***즉 hook이라는것은 비즈니스 로직을 가공하고 더 쉽게 구현하기 위해 만들어진 built-in 코드가 아닐까?***

#### React에서 말하는 hook이란?

React Hooks enables the functional components to attach the local state to it, so that you can use React functionality without using a **class component**.

Advantages of react hooks:

- Readable
- Lesser Code.
- Overall Optimized component
- Writing a Functional component with state
- Writing complex components became easier
- Handling events & logics in functional components.
- Performance boost up with Functional Components

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
- **100% backwards-compatible.** Hooks don’t contain any breaking changes.

_Hooks_ let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.

![Pasted image 20231113083054](https://github.com/resetmerlin/Why-hooks/assets/108568153/3da74f03-1ee0-4f08-a657-4c83d7f9c336)

“**_React simply calls your function components over and over again when it needs to render it. You’ll need to use React Hooks to store state and plug into the React render lifecycle. And thanks to JavaScript Closures, your variables are scoped to the specific function call._**”

JavaScript can be pretty tricky and today we require you to use class components in order to access state and life cycles if you've ever taken a function component and converted it to a class to add some state you know that there's a fair amount of boilerplate that's required in order to just define a class ***component most beginners and many experienced devs also tell us that the way binding and this work in classes is pretty confusing***.


I claim classes are hard for humans but it's not just humans I claim the classes are also ***hard for machines***
if you ever looked at a minified component file you'll see that all the method names are still unminified that if you have a method that's completely unused it doesn't get stripped out that's because it's hard to tell at compile time exactly how all the methods fit together

#### 드는 생각

놀랍다. 클래스 컴포넌트의 한계로 hook이 나왔으며 이를 통해 함수형 컴포넌트가 자리잡았던 것이었다. 즉 hook이 왜 탄생했는지 알려면 class component를 사용하여 뭔가를 만들어야 한다. 그래야 hook이 왜 탄생했는지 알 수 있다. 

Class component를 사용할때
![Pasted image 20231113082227](https://github.com/resetmerlin/Why-hooks/assets/108568153/66e64b2e-f78c-4388-8e35-9fb345587a5b)

Functional Component + hook을 사용할때

![Pasted image 20231113082242](https://github.com/resetmerlin/Why-hooks/assets/108568153/72b2cf4d-40d4-46e6-8e49-be011a896714)

Class형 컴포넌트보다 더 직관적이고 코드 수도 짧다. 애플리케이션 특성상 커질 수록 코드 수가 느는건 피치못할 사실이며 이에 요구되는 직관성 또한 필요하다. 즉 hook을 사용하는 이유는 Class형 컴포넌트에서 발생하는 문제점(로직을 재사용할떄 어려움, 컴포넌트가 거대해질때 코드 관리하기 어려움, 컴파일 시간에 메소드가 같이 있는지 파악하기 어려움)을 보완하기 위해, 더 적은 코드로 비즈니스 로직을 수행시키기 위함이다. 
