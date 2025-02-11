import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchProvider from "./SearchProvider";
import { lazy, Suspense } from "react";
import Header from "./Header";
import Left from "./Left";
import StudentList from "./StudentList";
import { Provider } from "react-redux";
import store from './store'


import "./App.css";
import "./scss/custom.css";

const StudentsList = lazy(() => import("./StudentList"));
const ClassesList = lazy(() => import("./Classes"));
const PostsList = lazy(() => import('./Posts'));


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <SearchProvider> */}
                <Provider store={store}>

                    <h1>React App TP</h1>
                    <div className="container">
                        <div className="row text-white rounded-3 p-3 text-dark bg-secondary my-3">
                            <div className="col-12">
                                <Header />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <Left />
                            </div>

                            <div className="col-9">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Routes>
                                        <Route path="/" element={<StudentsList />} />
                                        <Route path="/classes" element={<ClassesList />} />
                                        <Route path="/classes/:id/Students" element={<StudentList />} />
                                        <Route path="/posts" element={<PostsList/>}/>
                                    </Routes>
                                </Suspense>
                            </div>

                        </div>
                    </div>

                </Provider>
                {/* </SearchProvider> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
