import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });